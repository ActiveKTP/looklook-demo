import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';
import { environment } from 'src/environments/environment';
import { DataTablesResponse, IOwnerModel } from './owner.interface'

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private apiUrl = `${environment.apiUrl}/api/v1/admin/user`;

  private token = new Token();

  private headers = new HttpHeaders({
    Authorization: `Bearer ${this.token.requestAuthToken()}`,
  });

  private options = {
    headers: this.headers
  };

  constructor(private http: HttpClient) { }

  getOwners(dataTablesParameters: any): Observable<DataTablesResponse> {
    console.log('==getOwners call==')
    console.log('dataTablesParameters=>', dataTablesParameters)
    console.log('End dataTablesParameters<=')
    /////////////////
    const page = this.calDraw(dataTablesParameters.start, dataTablesParameters.length);
    console.log('this page ==', page)
    /////////////////
    const url = `${this.apiUrl}?page=${page}&limit=${dataTablesParameters.length}&order=${dataTablesParameters.order.column}&orderBy=${dataTablesParameters.order.dir}`;
    console.log(url)
    
    return this.http.get<DataTablesResponse>(url, this.options);
  }

  calDraw(start:number, length:number, ) : number{
    /////////////
    if(start/length< 1)  {
     return 1;
     }
     else return (start/length)+1;
   ////////////
 }

  getOwner(id: string): Observable<IOwnerModel> {
    const url = `${this.apiUrl}/${id}`;
    console.log(url)
    const result = this.http.get<IOwnerModel>(url, this.options);
    console.log('get owner result')
    console.log(result)
    return result;
  }

  createOwner(owner: IOwnerModel): Observable<IOwnerModel> {
    return this.http.post<IOwnerModel>(this.apiUrl, owner, this.options);
  }

  updateOwner(id: string, owner: IOwnerModel): Observable<IOwnerModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<IOwnerModel>(url, owner, this.options);
  }

  patchOwner(id: string, owner: IOwnerModel): Observable<IOwnerModel> {
    let url = `${this.apiUrl}/active/${id}`;
    if(!owner.active)url = `${this.apiUrl}/inactive/${id}`;
    console.log(url)
    return this.http.patch<IOwnerModel>(url, this.options);
  }

  deleteOwner(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url, this.options);
  }
}