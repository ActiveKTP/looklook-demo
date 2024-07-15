import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';

// export interface DataTablesResponse {
//     draw?: number;
//     recordsTotal: number;
//     recordsFiltered: number;
//     data: any[];
// }

export interface DataTablesResponse {
  success: boolean;
  pets: IPetModel[];
  pageSize: number;
  currentPage: number;
  total: number;
}

export interface IPetModel {
    _id: string; // ObjectId
    type: string; // ObjectId
    breedType: string; // String
    breeds: string[]; // Array of ObjectId
    photoUrl: string | null; // Null
    name: string; // String
    size: string | null; // Null
    bloodGroup: string | null; // Null
    weight: number | null; // Null
    weightUnit: string | null; // Null
    birthDate: string; // Date in ISO format
    birthYear: number | null; // Null
    adoptionDate: string | null; // Null
    tags: string[]; // Array of ObjectId
    about: string | null; // Null
    colors: string[]; // Array (empty)
    certifiedPedigreeUrl: string | null; // Null
    petMedicals: any[]; // Array (empty)
    owner: string; // ObjectId
    active: boolean; // Boolean
    deleted: boolean; // Boolean
    deleteReason: {
      reason: string | null; // Null
      remark: string | null; // Null
    };
    groupOfAge: {
      en: string; // String
      th: string; // String
    };
    gender: {
      en: string; // String
      th: string; // String
    };
    createdAt: string; // Date in ISO format
    updatedAt: string;
  }

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
      const url = `${this.apiUrl}?page=${dataTablesParameters.page}&limit=${dataTablesParameters.limit}&order=${dataTablesParameters.order}&orderBy=${dataTablesParameters.orderBy}`;

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
        return this.http.get<IPetModel>(url);
    }

    createPet(pet: IPetModel): Observable<IPetModel> {
        return this.http.post<IPetModel>(this.apiUrl, pet);
    }

    updatePet(id: string, pet: IPetModel): Observable<IPetModel> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.put<IPetModel>(url, pet);
    }

    deletePet(id: string): Observable<void> {
        const url = `${this.apiUrl}/${id}`;
        return this.http.delete<void>(url);
    }
}