import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';

export interface PetColorName {
    en: string;
    th: string;
  }
  
  export interface PetColor {
    _id: string;
    name: PetColorName;
    code: string;
    active: boolean;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
  }
  
  export interface PetColorsResponse {
    success: boolean;
    colors: PetColor[];
  }

@Injectable({
  providedIn: 'root'
})

export class PetColorService {
  private apiUrl = 'https://looklook.pet/api/v1/color';

  private token = new Token();

  constructor(private http: HttpClient) {}

  getColors(): Observable<PetColorsResponse> {

    console.log('==get Color call==')
      const url = `${this.apiUrl}`;

      const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token.requestAuthToken()}`,
      });

      const options = { 
          headers: headers
      };

    return this.http.get<PetColorsResponse>(url, options);
  }
}
