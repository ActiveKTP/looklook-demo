import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Token } from '../token.service';

@Injectable({
    providedIn: 'root'
})

export class PetGroupAgeService {

    private mockgroupAges = [
        {
            "name": {
                "en": "Junior",
                "th": "วัยเด็ก"
            },
            "_id": "6614dde3e4365818a508ee5d",
            "min": 0,
            "max": 2
        },
        {
            "name": {
                "en": "Prime",
                "th": "วัยหนุ่มสาว"
            },
            "_id": "6614e32755aa415362325938",
            "min": 3,
            "max": 6
        },
        {
            "name": {
                "en": "Mature",
                "th": "โตเต็มวัย"
            },
            "_id": "6614ddf0c12876cb2d0737e4",
            "min": 6,
            "max": 10
        },
        {
            "name": {
                "en": "Senior",
                "th": "วัยอาวุโส"
            },
            "_id": "6614ddf75b40df03a10abfe0",
            "min": 11,
            "max": 15
        },
        {
            "name": {
                "en": "Old",
                "th": "วัยชรา"
            },
            "_id": "6614ddff1e42423d7aa660af",
            "min": 16,
            "max": 30
        }
    ];

    constructor() { }

    getGroupOfAges(): Observable<any[]> {
        console.log(this.mockgroupAges)
        return of(this.mockgroupAges);
    }

}