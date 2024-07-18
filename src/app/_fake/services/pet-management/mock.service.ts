import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IPetGender } from './pet.interface'

@Injectable({
    providedIn: 'root'
})

export class PetMockService {

    private mockGender = [
        {
            "en": "female",
            "th": "ตัวเมีย"
        },
        {
            "en": "male",
            "th": "ตัวผู้"
        }
    ];

    private mockBreedType = [
        {
            "id": "1",
            "name": "pure"
        },
        {
            "id": "2",
            "name": "cross"
        }
    ];


    constructor() { }

    getGenders(): Observable<IPetGender[]> {
        return of(this.mockGender);
    }

    getBreedTypes(): Observable<any[]> {
        return of(this.mockBreedType);
    }

}