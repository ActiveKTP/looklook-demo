import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';
import {environment} from 'src/environments/environment';

export interface DataTablesResponse {
    success: boolean;
    users: IOwnerModel[];
    pageSize: number;
    currentPage: number;
    total: number;
  }

export interface IDeleteReason {
    reason: string | null;
    remark: string | null;
  }

export interface IOwnerModel {
    deleteReason: IDeleteReason;
    _id: string;
    email: string;
    displayName: string;
    avatarUrl: string;
    active: boolean;
    suspended: boolean;
    suspendRequest: string | null;
    createdAt: string;
    updatedAt: string;
  }

  @Injectable({
    providedIn: 'root'
})
export class OwnerService {

    private apiUrl = `${environment.apiUrl}/api/v1/admin/user?page=1&limit=10`;

    private token = new Token();

    constructor(private http: HttpClient) { }

    getOwners(dataTablesParameters: any): Observable<DataTablesResponse> {
      console.log('==getOwners call==')
      const url = `${this.apiUrl}?page=${dataTablesParameters.page}&limit=${dataTablesParameters.limit}&order=${dataTablesParameters.order}&orderBy=${dataTablesParameters.orderBy}`;

      const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token.requestAuthToken()}`,
      });

      const options = { 
          headers: headers
      };

      return this.http.get<DataTablesResponse>(url, options);
    }

    getOwner(id: string): Observable<IOwnerModel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.get<IOwnerModel>(url);
    }

    createOwner(owner: IOwnerModel): Observable<IOwnerModel> {
        return this.http.post<IOwnerModel>(this.apiUrl, owner);
    }

    updateOwner(id: string, owner: IOwnerModel): Observable<IOwnerModel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<IOwnerModel>(url, owner);
    }

    deleteOwner(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}