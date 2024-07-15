import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';

  export interface PetTagName {
    en: string;
    th: string;
  }

  export interface PetTagTypeName {
    name:{
        en: string;
        th: string;
    }
  }
  
  export interface PetTag {
    _id: string;
    name: PetTagName;
    type: PetTagTypeName;
    active: boolean;
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
  }
  
  export interface PetTagsResponse {
    success: boolean;
    tags: PetTag[];
  }

@Injectable({
  providedIn: 'root'
})

export class PetTagService {
  private apiUrl = 'https://looklook.pet/api/v1/tag';

  private token = new Token();

  constructor(private http: HttpClient) {}

  getTags(): Observable<PetTagsResponse> {

    console.log('==get Tag call==')
      const url = `${this.apiUrl}`;

      const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token.requestAuthToken()}`,
      });

      const options = { 
          headers: headers
      };

    return this.http.get<PetTagsResponse>(url, options);
  }
}
