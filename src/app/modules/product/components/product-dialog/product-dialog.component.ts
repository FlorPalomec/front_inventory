import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { CategoryService } from '../../../shared/services/category';

@Component({
  selector: 'app-product-dialog',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
],
  template: `

    <h2>
      {{ data.title }}
    </h2>

    <mat-form-field appearance="outline" style="width:100%">
      <mat-label>Disponibles</mat-label>

      <input
        matInput
        [(ngModel)]="data.product.account">
    </mat-form-field>

    <mat-form-field appearance="outline" style="width:100%">
      <mat-label>Nombre</mat-label>

      <input
        matInput
        [(ngModel)]="data.product.name">
    </mat-form-field>

    <mat-form-field appearance="outline" style="width:100%">
      <mat-label>Imagen</mat-label>

      <input
        matInput
        [(ngModel)]="data.product.picture">
    </mat-form-field>

    <mat-form-field appearance="outline" style="width:100%">
      <mat-label>Precio</mat-label>

      <input
        matInput
        [(ngModel)]="data.product.price">
    </mat-form-field>

    <mat-form-field appearance="outline" style="width:100%">
  <mat-label>Categoria</mat-label>

  <mat-select [(ngModel)]="data.product.category_id">

    <mat-option *ngFor="let c of categories" [value]="c.id">
      {{ c.name }}
    </mat-option>

  </mat-select>

</mat-form-field>

    <div style="display:flex; justify-content:end; gap:10px">

      <button mat-button (click)="cerrar()">
        Cancelar
      </button>

      <button
        mat-raised-button
        color="primary"
        (click)="guardar()">

        Guardar

      </button>

    </div>
  `
})

export class ProductDialogComponent {

  categories:any[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: any,

    private categoryService: CategoryService

  ) {

    this.categoryService.getCategories().subscribe((resp:any) => {

      this.categories = resp.categoryResponse.category;

      console.log(this.categories);

    });

  }

  guardar(): void {

    this.dialogRef.close(this.data.product);

  }

  cerrar(): void {

    this.dialogRef.close();

  }

}
