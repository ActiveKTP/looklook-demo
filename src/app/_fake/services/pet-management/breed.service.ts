import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Token } from '../token.service';

@Injectable({
    providedIn: 'root'
  })
  
  export class PetBreedService {

    private mockBreeds = [
            {
                "_id": "66013c3546e77c020955c6ac",
                "name": "dog",
                "breeds": [
                    {
                      "name": {
                        "_id":"1",
                        "en": "Golden Retriever",
                        "th": "โกลเด้น รีทรีฟเวอร์"
                      }
                    },
                    {
                      "name": {
                        "_id":"2",
                        "en": "Rottweiler",
                        "th": "ร็อตไวเลอร์"
                      }
                    },
                    {
                      "name": {
                        "_id":"3",
                        "en": "Pitbull",
                        "th": "พิตบูล"
                      }
                    },
                    {
                      "name": {
                        "_id":"4",
                        "en": "Chihuahua",
                        "th": "ชิวาวา"
                      }
                    },
                    {
                      "name": {
                        "_id":"5",
                        "en": "Jack Russell",
                        "th": "แจ็ครัสเซลล์ เทอร์เรีย"
                      }
                    }
                  ]
            },
            {
                "_id": "66013cff271372ef257f33f0",
                "name": "cat",
                "breeds": [
                    {
                      "name": {
                        "_id":"6",
                        "en": "Korat",
                        "th": "ไทยโคราช"
                      },
                    },
                    {
                      "name": {
                        "_id":"7",
                        "en": "Siamese",
                        "th": "ไทยวิเชียรมาศ"
                      },
                    },
                    {
                      "name": {
                        "_id":"8",
                        "en": "Khao Manee",
                        "th": "ไทยขาวมณี"
                      },
                    },
                    {
                      "name": {
                        "_id":"9",
                        "en": "Exotic Shorthair",
                        "th": "เอ็กโซติก ช็อตแฮร์"
                      },
                    },
                    {
                      "name": {
                        "_id":"10",
                        "en": "American Shorthair",
                        "th": "อเมริกัน ช็อตแฮร์"
                      },
                    }
                  ]
            }
        ];

    // private mockGroupOfAges = {
    //     groupOfAges: [
    //       {
    //         "name": {
    //           "en": "Junior",
    //           "th": "วัยเด็ก"
    //         },
    //         "_id": "6614e43fc6dc4d9a302fc246",
    //         "min": 0,
    //         "max": 1
    //       },
    //       {
    //         "name": {
    //           "en": "Adolescent",
    //           "th": "วัยหนุ่มสาว"
    //         },
    //         "_id": "6614e4465c0e57200dee189e",
    //         "min": 2,
    //         "max": 4
    //       },
    //       {
    //         "name": {
    //           "en": "Mature",
    //           "th": "โตเต็มวัย"
    //         },
    //         "_id": "6614e44c0201eb743dc70e24",
    //         "min": 5,
    //         "max": 7
    //       },
    //       {
    //         "name": {
    //           "en": "Senior",
    //           "th": "วัยอวุโส"
    //         },
    //         "_id": "6614e4fad65cf2c9dee4d8e9",
    //         "min": 8,
    //         "max": 11
    //       },
    //       {
    //         "name": {
    //           "en": "Old",
    //           "th": "วัยชรา"
    //         },
    //         "_id": "6614e4cbf83794efc5f34d0d",
    //         "min": 12,
    //         "max": 25
    //       }
    //     ]
    //   };

    constructor() {}

    getBreeds(): Observable<any> {
        console.log('==get Breed call==');
        console.log(this.mockBreeds)
        return of(this.mockBreeds);
    }

    getBreedsType(petType:string): Observable<any> {

        // Find the petType object by name
   const result = this.mockBreeds.find((type) => type.name === petType);
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