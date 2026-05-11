import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductService } from '../../../shared/services/product';

import { ProductDialogComponent }
from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule
  ],
  templateUrl: './product.html',
  styleUrls: ['./product.css']
})
export class ProductComponent implements OnInit {

  private productService = inject(ProductService);
  private dialog = inject(MatDialog);

  displayColumns: string[] = ['id', 'account', 'name', 'picture', 'price', 'category_id', 'actions'];
  
  dataSource = new MatTableDataSource<ProductElement>();

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
   this.productService.getProducts()
      .subscribe((data:any) => {
        console.log("respuesta products:", data);
        this.processProductsResponse(data);
      }, (error:any) => {
        console.log("Error:", error);
      });
  }

processProductsResponse(resp:any){
  if(resp.metadata[0].code === "00"){
    this.dataSource.data = resp.productResponse.product;
  }
}
agregarProducto(): void {

    const dialogRef = this.dialog.open(ProductDialogComponent, {

      width: '400px',

      data: {

        title: 'Agregar Producto',

        product: {
          account: '',
          name: '',
          picture: '',
          price:'',
          category_id: ''
        }

      }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.productService.agregarProducto(result)
          .subscribe(() => {

            this.getProducts();

          });

      }

    });

  }

  editarProducto(element: any): void {

    const dialogRef = this.dialog.open(ProductDialogComponent, {

      width: '400px',

      data: {

        title: 'Editar Producto',

        product: {
          ...element
        }

      }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.productService.editarProducto(element.id, result)
          .subscribe(() => {

            this.getProducts();

          });

      }

    });

  }

  eliminarProducto(id: number): void {

    const confirmar = confirm("¿Deseas eliminar este producto?");

    if (confirmar) {

      this.productService.eliminarProducto(id)
        .subscribe(() => {

          this.getProducts();

        });

    }

  }


}
export interface ProductElement {
  id: number;
  account: number;
  name: string;
  picture: string; 
  price: number;
  category_id: number;
}

