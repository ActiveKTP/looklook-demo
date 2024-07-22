import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';
//import { IOwnerModel } from '../owner-management/owner.service'
import { DataTablesResponse, IPetModel } from '../pet-management/pet.interface'

// export interface DataTablesResponse {
//     draw?: number;
//     recordsTotal: number;
//     recordsFiltered: number;
//     data: any[];
// }
@Injectable({
  providedIn: 'root'
})
export class PetService {

  //private apiUrl = 'https://preview.keenthemes.com/starterkit/metronic/laravel/api/v1/pets';
  // private apiUrl = 'http://127.0.0.1:8000/api/v1/pets';
  private apiUrl = 'https://looklook.pet/api/v1/pet';

  private token = new Token();

  constructor(private http: HttpClient) { }

  getPets(dataTablesParameters: any): Observable<DataTablesResponse> {
    console.log('==getPets call==')
    const url = `${this.apiUrl}?page=1&limit=10&order=createdAt&orderBy=desc`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.requestAuthToken()}`,
    });

    const options = {
      headers: headers
    };

    return this.http.get<DataTablesResponse>(url, options);
  }

  getPet(id: string): Observable<IPetModel> {

    const url = `${this.apiUrl}/${id}`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.requestAuthToken()}`,
    });

    const options = {
      headers: headers
    };

    const result = this.http.get<IPetModel>(url, options);
    console.log('get pet result')
    console.log(result)
    return result;
  }

  createPet(pet: IPetModel): Observable<IPetModel> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.requestAuthToken()}`,
    });

    const options = {
      headers: headers
    };

    return this.http.post<any>(this.apiUrl, pet, options);
  }

  updatePet(id: string, pet: IPetModel): Observable<IPetModel> {
    const url = `${this.apiUrl}/${id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.requestAuthToken()}`,
    });

    const options = {
      headers: headers
    };
    return this.http.put<IPetModel>(url, pet, options);
  }

  deletePet(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}