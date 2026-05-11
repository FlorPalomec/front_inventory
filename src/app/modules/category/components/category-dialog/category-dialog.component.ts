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

@Component({
  selector: 'app-category-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  template: `

    <h2>
      {{ data.title }}
    </h2>

    <mat-form-field appearance="outline" style="width:100%">

      <mat-label>Nombre</mat-label>

      <input
        matInput
        [(ngModel)]="data.category.name">

    </mat-form-field>

    <mat-form-field appearance="outline" style="width:100%">

      <mat-label>Descripción</mat-label>

      <input
        matInput
        [(ngModel)]="data.category.description">

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
export class CategoryDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoryDialogComponent>,

    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  guardar(): void {

    this.dialogRef.close(this.data.category);

  }

  cerrar(): void {

    this.dialogRef.close();

  }

}