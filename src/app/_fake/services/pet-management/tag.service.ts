import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';
import { PetTagsResponse } from '../pet-management/pet.interface'

@Injectable({
  providedIn: 'root'
})

export class PetTagService {
  private apiUrl = 'https://looklook.pet/api/v1/tag';

  private token = new Token();

  constructor(private http: HttpClient) { }

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
