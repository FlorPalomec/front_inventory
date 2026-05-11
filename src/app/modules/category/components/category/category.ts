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
import { CategoryService } from '../../../shared/services/category';

import { CategoryDialogComponent }
from '../category-dialog/category-dialog.component';

@Component({
  selector: 'app-category',
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
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent implements OnInit {

  private categoryService = inject(CategoryService);

  private dialog = inject(MatDialog);

  displayColumns: string[] = ['id', 'name', 'description', 'actions'];

  dataSource = new MatTableDataSource<CategoryElement>();

  ngOnInit(): void {

    this.getCategories();

  }

  getCategories(): void {

    this.categoryService.getCategories()
      .subscribe(
        (data: any) => {

          console.log("respuesta categories:", data);

          this.processCategoriesResponse(data);

        },
        (error: any) => {

          console.log("Error:", error);

        }
      );

  }

  processCategoriesResponse(resp: any): void {

    if (resp.metadata[0].code === "00") {

      this.dataSource.data = resp.categoryResponse.category;

    }

  }

  agregarCategoria(): void {

    const dialogRef = this.dialog.open(CategoryDialogComponent, {

      width: '400px',

      data: {

        title: 'Agregar Categoría',

        category: {
          name: '',
          description: ''
        }

      }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.categoryService.agregarCategoria(result)
          .subscribe(() => {

            this.getCategories();

          });

      }

    });

  }

  editarCategoria(element: any): void {

    const dialogRef = this.dialog.open(CategoryDialogComponent, {

      width: '400px',

      data: {

        title: 'Editar Categoría',

        category: {
          ...element
        }

      }

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.categoryService.editarCategoria(element.id, result)
          .subscribe(() => {

            this.getCategories();

          });

      }

    });

  }

  eliminarCategoria(id: number): void {

    const confirmar = confirm("¿Deseas eliminar esta categoría?");

    if (confirmar) {

      this.categoryService.eliminarCategoria(id)
        .subscribe(() => {

          this.getCategories();

        });

    }

  }

}

export interface CategoryElement {

  id: number;
  name: string;
  description: string;

}