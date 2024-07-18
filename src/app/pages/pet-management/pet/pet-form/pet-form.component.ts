import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/_fake/services/pet-management/pet.service';
import { PetTypeService } from 'src/app/_fake/services/pet-management/type.service'; // Adjust path as needed
import { IPetGender, PetType, IPetModel, IPetBreed, PetColor, PetColorsResponse } from 'src/app/_fake/services/pet-management/pet.interface'
import { PetBreedService } from 'src/app/_fake/services/pet-management/breed.service';
import { PetColorService } from 'src/app/_fake/services/pet-management/color.service';
import { PetMockService } from 'src/app/_fake/services/pet-management/mock.service';
import { PetGroupAgeService } from 'src/app/_fake/services/pet-management/groupAge.service';

@Component({
    selector: 'app-pet-form',
    templateUrl: './pet-form.component.html',
    styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
    petForm: FormGroup;
    petId: string | null = null;
    isLoading = false;
    petTypes: PetType[] = []; // Array to hold pet types
    petGenders: IPetGender[] = []; // Array to hold pet types
    petGroupAges: any[] = []; // Array to hold pet types
    petBreedtype: any[] = []; // Array to hold pet types
    petBreeds: IPetBreed[] = [];
    petColors: PetColorsResponse;

    constructor(
        private fb: FormBuilder,
        private petService: PetService,
        private petTypeService: PetTypeService, // Inject PetTypeService
        private petBreedService: PetBreedService,
        private petColorService: PetColorService,
        private petMockService: PetMockService,
        private petGroupAgeService: PetGroupAgeService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.petForm = this.fb.group({
            type: [null, Validators.required], // Initialize type as null
            breedType: ['', Validators.required],
            breeds: this.fb.array([]),
            photoUrl: [null],
            name: ['', Validators.required],
            weight: [null, Validators.min(0)],
            weightUnit: [null],
            birthDate: ['', Validators.required],
            adoptionDate: [null],
            tags: this.fb.array([]),
            about: [null],
            colors: this.fb.array([]),
            certifiedPedigreeUrl: [null],
            owner: [null],
            active: [false],
            groupOfAge: [null, Validators.required],
            gender: [null, Validators.required],
        });
    }

    ngOnInit(): void {

        //get pet
        this.petId = this.route.snapshot.paramMap.get('id');
        if (this.petId) {
            this.petService.getPet(this.petId).subscribe((pet: IPetModel) => {
                console.log('==Pet==');
                console.log(pet);
                this.petForm.patchValue(pet);
                if (pet.breeds) this.setBreeds(pet.breeds);
                // Set the correct value for the type dropdown
                this.petForm.get('type')?.setValue(pet.type?._id);
                this.petForm.get('gender')?.setValue(pet.gender?.en);
                this.petForm.get('groupOfAge')?.setValue(pet.groupOfAge?.en);
                //this.petForm.get('breeds')?.setValue(pet.breeds);

                console.log(pet.type?._id)
                if (pet.type?._id) {
                    this.petBreedService.getBreedsType(pet.type._id).subscribe((breeds: any[]) => {
                        console.log('call pet breed')
                        console.log(breeds)
                        this.petBreeds = breeds;
                    });
                }

                this.petColorService.getColors().subscribe((colors: PetColorsResponse) => {
                    console.log('call pet color')
                    console.log(colors)
                    this.petColors = colors;
                });

            });
        }

        // Fetch pet types from service
        this.petTypeService.getTypes().subscribe((response) => {
            if (response.success) {
                console.log('=pet tupe=', response.petTypes)
                this.petTypes = response.petTypes;
            }
        });

        //get breed 
        // this.petBreedService.getBreedsType(this.petTypes.name).subscribe((genders: IPetGender[]) => {
        //     this.petBreeds = genders;
        // });

        // Fetch pet genders from service
        this.petMockService.getGenders().subscribe((genders: IPetGender[]) => {
            this.petGenders = genders;
        });

        // Fetch Breeds Type
        this.petMockService.getBreedTypes().subscribe((breedtypes: any[]) => {
            this.petBreedtype = breedtypes;
        });

        //Fetch Group Age 
        this.petGroupAgeService.getGroupOfAges().subscribe((groupAges: any[]) => {
            console.log('=get groupAges=', groupAges)
            this.petGroupAges = groupAges;
        });

    }

    get breeds() {
        return this.petForm.get('breeds') as FormArray;
    }

    setBreeds(breeds: IPetBreed[]): void {
        const breedsFormArray = this.petForm.get('breeds') as FormArray;
        breeds.forEach(breed => {
            breedsFormArray.push(this.fb.group({
                name: this.fb.group({
                    en: [breed.name.en, Validators.required],
                    th: [breed.name.th]
                }),
                _id: [breed._id]
            }));
        });
    }

    addBreed(): void {
        const breeds = this.petForm.get('breeds') as FormArray;
        breeds.push(this.fb.group({
            name: this.fb.group({
                en: ['', Validators.required],
                th: ['']
            }),
            _id: ['']
        }));
    }

    removeBreedLast(): void {
        if (this.breeds.length > 1) {
            this.breeds.removeAt(this.breeds.length - 1);
        }
    }

    removeBreed(index: number): void {
        this.breeds.removeAt(index);
    }

    get tags() {
        return this.petForm.get('tags') as FormArray;
    }

    addTag(): void {
        const tags = this.petForm.get('tags') as FormArray;
        tags.push(this.fb.group({
            name: '',
            _id: ''
        }));
    }

    removeaddTagLast(): void {
        if (this.tags.length > 0) {
            this.tags.removeAt(this.tags.length - 1);
        }
    }

    get colors() {
        return this.petForm.get('colors') as FormArray;
    }

    addColor(): void {
        const colors = this.petForm.get('colors') as FormArray;
        colors.push(this.fb.group({
            name: '',
            _id: ''
        }));
    }

    removeaddColorLast(): void {
        if (this.colors.length > 0) {
            this.colors.removeAt(this.colors.length - 1);
        }
    }

    onSubmit(): void {
        if (this.petForm.invalid) {
            return;
        }

        this.isLoading = true;
        const petData = this.petForm.value as IPetModel;

        if (this.petId) {
            this.petService.updatePet(this.petId, petData).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/apps/pet-managements']);
            });
        } else {
            this.petService.createPet(petData).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/apps/pet-managements']);
            });
        }
    }
}
