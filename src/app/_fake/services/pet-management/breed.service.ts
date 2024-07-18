import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Token } from '../token.service';
import { PetType } from '../pet-management/pet.interface'

@Injectable({
  providedIn: 'root'
})

export class PetBreedService {

  private mockBreeds = [
    {
      "_id": "65fbb54ce841516b44e581e8",
      "name": "dog",
      "breeds": [
        {
          "name": {
            "en": "Golden Retriever",
            "th": "โกลเด้น รีทรีฟเวอร์"
          },
          "_id": "66013c12f1fd26ced85882cd",
        },
        {
          "name": {

            "en": "Rottweiler",
            "th": "ร็อตไวเลอร์"
          },
          "_id": "66013c3546e77c020955c6ac",
        },
        {
          "name": {

            "en": "Pitbull",
            "th": "พิตบูล"
          },
          "_id": "66013c3cad4b59d83f2b55c5",
        },
        {
          "name": {

            "en": "Chihuahua",
            "th": "ชิวาวา"
          },
          "_id": "66013c42dc1bd57d7259191a",
        },
        {
          "name": {

            "en": "Jack Russell",
            "th": "แจ็ครัสเซลล์ เทอร์เรีย"
          },
          "_id": "66013c4a34b8ade3b6a89d81",
        }
      ]
    },
    {
      "_id": "65fa88669523d5c135e0001a",
      "name": "cat",
      "breeds": [
        {
          "name": {

            "en": "Korat",
            "th": "ไทยโคราช"
          },
          "_id": "66013ce889d409b640c6574e",
        },
        {
          "name": {

            "en": "Siamese",
            "th": "ไทยวิเชียรมาศ"
          },
          "_id": "66013cf16110ac6bbfeeb163",
        },
        {
          "name": {

            "en": "Khao Manee",
            "th": "ไทยขาวมณี"
          },
          "_id": "66013cf6312f32bb01ad3a06",
        },
        {
          "name": {

            "en": "Exotic Shorthair",
            "th": "เอ็กโซติก ช็อตแฮร์"
          },
          "_id": "66013cff271372ef257f33f09",
        },
        {
          "name": {

            "en": "American Shorthair",
            "th": "อเมริกัน ช็อตแฮร์"
          },
          "_id": "66013d056e4113a670081169",
        }
      ]
    }
  ];

  constructor() { }

  getBreeds(): Observable<any> {
    console.log('==get Breed call==');
    console.log(this.mockBreeds)
    return of(this.mockBreeds);
  }

  getBreedsType(petType: string): Observable<any> {

    console.log(petType)

    // Find the petType object by name
    const result = this.mockBreeds.find((item) => item._id === petType);
    console.log(result)

    if (result) {
      console.log(result.breeds)
      return of(result.breeds); // Return as observable

    } else {

      console.warn(`Pet type '${petType}' not found in mockBreeds.`);
      return of([]);

    }

  }


  // getGroupOfAges(): Observable<any> {
  //   return of(this.mockGroupOfAges);
  // }

}