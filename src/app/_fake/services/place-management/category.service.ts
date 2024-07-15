import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPermissionModel } from '../permission.service';
import { IUserModel } from '../user-service';

export interface DataTablesResponse {
  draw?: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: any[];
}

export interface ICategoryModel {
  id: number;
  name: string;
  created_at?: string;
  updated_at?: string;
  permissions: IPermissionModel[];
  users: IUserModel[];
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl =
    'https://preview.keenthemes.com/starterkit/metronic/laravel/api/v1/roles';
  // private apiUrl = 'http://127.0.0.1:8000/api/v1/roles';

  constructor(private http: HttpClient) {}

  getUsers(
    id: number,
    dataTablesParameters: any
  ): Observable<DataTablesResponse> {
    const url = `${this.apiUrl}/${id}/users`;
    return this.http.post<DataTablesResponse>(url, dataTablesParameters);
  }

  getCategories(dataTablesParameters?: any): Observable<DataTablesResponse> {
    const url = `${this.apiUrl}-list`;
    return this.http.post<DataTablesResponse>(url, dataTablesParameters);
  }

  getCategory(id: number): Observable<ICategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ICategoryModel>(url);
  }

  createCategory(user: ICategoryModel): Observable<ICategoryModel> {
    return this.http.post<ICategoryModel>(this.apiUrl, user);
  }

  updateCategory(id: number, user: ICategoryModel): Observable<ICategoryModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ICategoryModel>(url, user);
  }

  deleteCategory(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  deleteUser(category_id: number, user_id: number): Observable<void> {
    const url = `${this.apiUrl}/${category_id}/users/${user_id}`;
    return this.http.delete<void>(url);
  }
}
