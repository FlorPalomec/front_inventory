import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly http = inject(HttpClient);

  private readonly API_URL = `${environment.apiUrl}/categories`;

  constructor() {}

  getCategories(): Observable<any> {

    return this.http.get<any>(this.API_URL);

  }

  getCategoryById(id: number): Observable<any> {

    return this.http.get<any>(`${this.API_URL}/${id}`);

  }

  saveCategory(category: any): Observable<any> {

    return this.http.post<any>(this.API_URL, category);

  }

  agregarCategoria(category: any): Observable<any> {

    return this.http.post<any>(this.API_URL, category);

  }

  editarCategoria(id: number, category: any): Observable<any> {

    return this.http.put<any>(`${this.API_URL}/${id}`, category);

  }

  eliminarCategoria(id: number): Observable<any> {

    return this.http.delete<any>(`${this.API_URL}/${id}`);

  }

}