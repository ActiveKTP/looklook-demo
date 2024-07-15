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

export interface ITagModel {
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
export class TagService {
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

  getTags(dataTablesParameters?: any): Observable<DataTablesResponse> {
    const url = `${this.apiUrl}-list`;
    return this.http.post<DataTablesResponse>(url, dataTablesParameters);
  }

  getTag(id: number): Observable<ITagModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ITagModel>(url);
  }

  createTag(user: ITagModel): Observable<ITagModel> {
    return this.http.post<ITagModel>(this.apiUrl, user);
  }

  updateTag(id: number, user: ITagModel): Observable<ITagModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<ITagModel>(url, user);
  }

  deleteTag(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  deleteUser(tag_id: number, user_id: number): Observable<void> {
    const url = `${this.apiUrl}/${tag_id}/users/${user_id}`;
    return this.http.delete<void>(url);
  }
}
