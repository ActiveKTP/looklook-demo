import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';

export interface PetTypeName {
    en: string;
    th: string;
  }
  
  export interface PetType {
    _id: string;
    name: PetTypeName;
    imageUrl: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface PetTypesResponse {
    success: boolean;
    petTypes: PetType[];
  }

@Injectable({
  providedIn: 'root'
})

export class PetTypeService {
  private apiUrl = 'https://looklook.pet/api/v1/pet-type';

  private token = new Token();

  constructor(private http: HttpClient) {}

  getTypes(): Observable<PetTypesResponse> {

    console.log('==get type call==')
      const url = `${this.apiUrl}`;

      const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token.requestAuthToken()}`,
      });

      const options = { 
          headers: headers
      };

    return this.http.get<PetTypesResponse>(url, options);
  }
}
