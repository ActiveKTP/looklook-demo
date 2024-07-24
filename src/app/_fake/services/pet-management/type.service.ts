import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '../token.service';
import { PetTypesResponse } from '../pet-management/pet.interface'


@Injectable({
  providedIn: 'root'
})

export class PetTypeService {
  private apiUrl = 'https://looklook.pet/api/v1/pet-type';

  private token = new Token();

  constructor(private http: HttpClient) { }

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
