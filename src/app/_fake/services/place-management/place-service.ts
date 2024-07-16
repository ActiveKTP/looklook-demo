import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IRoleModel } from '../role.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Token } from '../token.service';

export interface DataTablesResponse {
  draw?: number;
  recordsTotal: number;
  recordsFiltered: number;
  data: any[];
}

export interface DataTablesRecipe {
  success: boolean;
  places: IPlaceModel[];
  pageSize: number;
  currentPage: number;
  total: number;
}

export interface IPlaceModel {
  // avatar?: null | string;
  // created_at?: string;
  // email: string;
  // email_verified_at?: string;
  // id: number;
  // last_login_at?: null | string;
  // last_login_ip?: null | string;
  // name?: string;
  // profile_photo_path?: null | string;
  // updated_at?: string;
  // password?: string;
  // roles?: IRoleModel[];
  // role?: string;
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  address: string;
  subdistrict: string;
  district: string;
  province: string;
  postCode: string;
  logoUrl: string;
  location: {
    lat: number;
    long: number;
  };
  contact: {
    mobileNumbers: string[];
    facebook: string;
    instagram: string;
    email: string;
    website: string;
  };
  // coverImages: object[];
  // category: object;
  // subcategory: object;
  tags: string[];
  isVip: boolean;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
  createdBy: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  // private apiUrl =
  //   'https://preview.keenthemes.com/starterkit/metronic/laravel/api/v1/users';
  // private apiUrl = 'http://127.0.0.1:8000/api/v1/users';
  private apiUrl = 'https://looklook.pet/api/v1/place';

  private token = new Token();

  constructor(private http: HttpClient) {}

  getPlaces(dataTablesParameters: any): Observable<DataTablesResponse> {
    const url = `${this.apiUrl}?lat=13.905877&long=100.520883&radius=10&limit=10`;

    console.log(dataTablesParameters);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token.requestAuthToken()}`,
    });

    return this.http
      .get<DataTablesResponse>(url, {
        headers: headers,
      })
      .pipe(
        map((response: any) => {
          // NOTE: response is of type SomeType
          // Does something on response.data
          // modify the response.data as you see fit.

          // return the modified data:
          return {
            recordsTotal: response.total,
            recordsFiltered: response.pageSize,
            data: response.places,
          }; // kind of useless
        }),
        catchError((error) => {
          return throwError(error); // From 'rxjs'
        })
      ); // end of pipe
  }

  getPlace(id: string): Observable<IPlaceModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<IPlaceModel>(url);
  }

  createPlace(place: IPlaceModel): Observable<IPlaceModel> {
    return this.http.post<IPlaceModel>(this.apiUrl, place);
  }

  updatePlace(id: string, place: IPlaceModel): Observable<IPlaceModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<IPlaceModel>(url, place);
  }

  deletePlace(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
