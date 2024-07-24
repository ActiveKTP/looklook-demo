import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/_fake/services/pet-management/pet.service';
import { PetTypeService } from 'src/app/_fake/services/pet-management/type.service'; // Adjust path as needed
import { IPetGender, PetType, IPetModel, IPetBreed, PetColor, PetColorsResponse, PetTag, PetTagsResponse } from 'src/app/_fake/services/pet-management/pet.interface'
import { PetBreedService } from 'src/app/_fake/services/pet-management/breed.service';
import { PetColorService } from 'src/app/_fake/services/pet-management/color.service';
import { PetMockService } from 'src/app/_fake/services/pet-management/mock.service';
import { PetGroupAgeService } from 'src/app/_fake/services/pet-management/groupAge.service';
import { PetTagService } from 'src/app/_fake/services/pet-management/tag.service';
import { OwnerService } from 'src/app/_fake/services/owner-management/owner.service';
import { IOwnerModel } from 'src/app/_fake/services/owner-management/owner.interface';
import {
    AuthService,
    UserType,
} from 'src/app//modules/auth/services/auth.service';

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
    petColors: PetColor[] = [];
    petTags: PetTag[] = [];
    owner: IOwnerModel;
    currentUser: UserType = undefined;

    tagInputControl = new FormControl('');
    matchingTags: PetTag[] = [];
    selectedTags: PetTag[] = [];


    constructor(
        private fb: FormBuilder,
        private petService: PetService,
        private petTypeService: PetTypeService, // Inject PetTypeService
        private petBreedService: PetBreedService,
        private petColorService: PetColorService,
        private petTagService: PetTagService,
        private petMockService: PetMockService,
        private petGroupAgeService: PetGroupAgeService,
        private ownerService: OwnerService,
        private route: ActivatedRoute,
        private router: Router,
        private apiService: AuthService,
        private changeDetector: ChangeDetectorRef,
    ) {
        this.currentUser = this.apiService.currentUserValue;
        this.petForm = this.fb.group({
            type: [null], // Initialize type as null
            breedType: [''],
            breeds: this.fb.array([]),
            photoUrl: [null],
            name: [''],
            weight: [null],
            //weightUnit: ["null"],
            birthDate: [''],
            adoptionDate: [''],
            tags: this.fb.array([]),
            about: [null],
            colors: this.fb.array([]),
            certifiedPedigreeUrl: [null],
            owner: [this.currentUser?.email || ''], // Set initial value to currentUser email
            active: [true], // Default to checked
            groupOfAge: [null],
            gender: [null],
        });
    }

    // ngOnInit(): void {

    //     //get pet
    //     this.petId = this.route.snapshot.paramMap.get('id');
    //     if (this.petId) {
    //         this.petService.getPet(this.petId).subscribe((pet: IPetModel) => {
    //             console.log('==Pet==');
    //             console.log(pet);
    //             this.petForm.patchValue(pet);
    //              if (pet.breeds) this.setBreeds(pet.breeds);
    //             // // Set the correct value for the type dropdown
    //             this.petForm.get('type')?.setValue(pet.type?._id);
    //             this.petForm.get('gender')?.setValue(pet.gender?.en);
    //             this.petForm.get('groupOfAge')?.setValue(pet.groupOfAge?.en);
    //             this.petForm.get('owner')?.setValue(pet.owner?.email);

    //             console.log(pet.type?._id)
    //             if (pet.type?._id) {
    //                 this.petBreedService.getBreedsType(pet.type._id).subscribe((breeds: any[]) => {
    //                     console.log('call pet breed')
    //                     console.log(breeds)
    //                     this.petBreeds = breeds;
    //                 });
    //             }
    //         });
    //     }

    //     // Fetch pet types from service
    //     this.petTypeService.getTypes().subscribe((response) => {
    //         if (response.success) {
    //             console.log('=pet tupe=', response.petTypes)
    //             this.petTypes = response.petTypes;
    //         }
    //     });

    //     //get breed 
    //     // this.petBreedService.getBreedsType(this.petTypes.name).subscribe((genders: IPetGender[]) => {
    //     //     this.petBreeds = genders;
    //     // });

    //     // Fetch Gender
    //     this.petMockService.getGenders().subscribe((genders: IPetGender[]) => {
    //         this.petGenders = genders;
    //     });

    //     // Fetch Breeds Type
    //     this.petMockService.getBreedTypes().subscribe((breedtypes: any[]) => {
    //         this.petBreedtype = breedtypes;
    //     });

    //     //Fetch Group Age 
    //     this.petGroupAgeService.getGroupOfAges().subscribe((groupAges: any[]) => {
    //         console.log('=get groupAges=', groupAges)
    //         this.petGroupAges = groupAges;
    //     });

    //     //Fetch Color
    //     this.petColorService.getColors().subscribe((colors: PetColorsResponse) => {
    //         console.log('call pet color')
    //         console.log(colors)
    //         this.petColors = colors.colors;
    //     });

    //     //Fetch Tag
    //     this.petTagService.getTags().subscribe((tags: PetTagsResponse) => {
    //         console.log('call pet tags')
    //         console.log(tags)
    //         this.petTags = tags.tags;
    //     });

    //     //Fetch Owner
    //     // this.ownerService.getColors().subscribe((colors: PetColorsResponse) => {
    //     //     console.log('call pet color')
    //     //     console.log(colors)
    //     //     this.petColors = colors.colors;
    //     // });

    //     console.log('check current user')
    //     console.log(this.currentUser)

    // }

    async ngOnInit(): Promise<void> {
        // Fetch pet data if petId is available
        this.petId = this.route.snapshot.paramMap.get('id');

        if (this.petId) {
            this.petService.getPet(this.petId).subscribe({
                next: (pet: IPetModel) => {
                    console.log('==Pet==', pet);
                    this.petForm.patchValue({
                        ...pet,
                        type: pet.type?._id,
                        gender: pet.gender?.en,
                        groupOfAge: pet.groupOfAge?.en,
                        birthDate: this.formatDate_display(pet.birthDate),
                        adoptionDate: this.formatDate_display(pet.adoptionDate),
                        owner: pet.owner?.email
                    });

                    if (pet.breeds) this.setBreeds(pet.breeds);

                    if (pet.type?._id) {
                        this.petBreedService.getBreedsType(pet.type._id).subscribe({
                            next: (breeds: any[]) => {
                                console.log('call pet breed', breeds);
                                this.petBreeds = breeds;
                            },
                            error: err => console.error('Error fetching pet breeds', err)
                        });
                    }

                    if (pet.colors) this.setColors(pet.colors);

                    if (pet.tags) this.setTags(pet.tags);
                    if (pet.tags) this.selectedTags = pet.tags;

                },
                error: err => console.error('Error fetching pet', err)
            });
        }

        // Fetch additional data needed for the form
        await Promise.all([
            this.fetchPetTypes(),
            this.fetchGenders(),
            this.fetchBreedTypes(),
            this.fetchGroupAges(),
            this.fetchColors(),
            this.fetchTags()
        ]);

        console.log('check current user', this.currentUser);
        this.changeDetector.detectChanges();
    }

    private formatDate_display(dateString: string | null): string | null {
        if (!dateString) return null;
        // console.log('dateString', dateString)
        // const date = new Date(dateString);
        // console.log('date=>', date)
        // const year = date.getFullYear();
        // const month = String(date.getMonth() + 1).padStart(2, '0');
        // const day = String(date.getDate()).padStart(2, '0');
        // console.log(`${year}-${month}-${day}`)
        // return `${year}-${month}-${day}`;
        return dateString.split('T')[0];
    }

    private fetchPetTypes(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.petTypeService.getTypes().subscribe({
                next: (response) => {
                    if (response.success) {
                        this.petTypes = response.petTypes;
                        resolve(this.petTypes);
                    } else {
                        reject('Failed to fetch pet types');
                    }
                },
                error: reject
            });
        });
    }

    // private fetchGenders(): void {
    //     this.petMockService.getGenders().subscribe({
    //         next: (genders: IPetGender[]) => {
    //             this.petGenders = genders;
    //         },
    //         error: err => console.error('Error fetching genders', err)
    //     });
    // }
    private fetchGenders(): Promise<IPetGender[]> {
        return new Promise((resolve, reject) => {
            this.petMockService.getGenders().subscribe({
                next: (genders: IPetGender[]) => {
                    this.petGenders = genders;
                    resolve(this.petGenders);
                },
                error: reject
            });
        });
    }

    // private fetchBreedTypes(): void {
    //     this.petMockService.getBreedTypes().subscribe({
    //         next: (breedtypes: any[]) => {
    //             this.petBreedtype = breedtypes;
    //         },
    //         error: err => console.error('Error fetching breed types', err)
    //     });
    // }
    private fetchBreedTypes(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.petMockService.getBreedTypes().subscribe({
                next: (breedtypes: any[]) => {
                    this.petBreedtype = breedtypes;
                    resolve(this.petBreedtype);
                },
                error: reject
            });
        });
    }

    // private fetchGroupAges(): void {
    //     this.petGroupAgeService.getGroupOfAges().subscribe({
    //         next: (groupAges: any[]) => {
    //             console.log('=get groupAges=', groupAges);
    //             this.petGroupAges = groupAges;
    //         },
    //         error: err => console.error('Error fetching group ages', err)
    //     });
    // }
    private fetchGroupAges(): Promise<any[]> {
        return new Promise((resolve, reject) => {
            this.petGroupAgeService.getGroupOfAges().subscribe({
                next: (groupAges: any[]) => {
                    this.petGroupAges = groupAges;
                    resolve(this.petGroupAges);
                },
                error: reject
            });
        });
    }

    // private fetchColors(): void {
    //     this.petColorService.getColors().subscribe({
    //         next: (colors: PetColorsResponse) => {
    //             console.log('call pet color', colors);
    //             this.petColors = colors.colors;
    //         },
    //         error: err => console.error('Error fetching colors', err)
    //     });
    // }
    private fetchColors(): Promise<PetColorsResponse> {
        return new Promise((resolve, reject) => {
            this.petColorService.getColors().subscribe({
                next: (colors: PetColorsResponse) => {
                    console.log('call pet color', colors);
                    this.petColors = colors.colors;
                    resolve(colors); // Resolve the Promise with the fetched colors
                },
                error: err => {
                    console.error('Error fetching colors', err);
                    reject(err); // Reject the Promise in case of an error
                }
            });
        });
    }

    // private fetchTags(): void {
    //     this.petTagService.getTags().subscribe({
    //         next: (tags: PetTagsResponse) => {
    //             console.log('call pet tags', tags);
    //             this.petTags = tags.tags;
    //         },
    //         error: err => console.error('Error fetching tags', err)
    //     });
    // }
    private fetchTags(): Promise<PetTagsResponse> {
        return new Promise((resolve, reject) => {
            this.petTagService.getTags().subscribe({
                next: (tags: PetTagsResponse) => {
                    console.log('call pet tags', tags);
                    this.petTags = tags.tags;
                    resolve(tags); // Resolve the Promise with the fetched colors
                },
                error: err => {
                    console.error('Error fetching tags', err);
                    reject(err); // Reject the Promise in case of an error
                }
            });
        });
    }

    // breed
    get breeds() {
        return this.petForm.get('breeds') as FormArray;
    }

    // setBreeds(breeds: IPetBreed[]): void {
    //     console.log('set breed call')
    //     const breedsFormArray = this.petForm.get('breeds') as FormArray;
    //     breeds.forEach(breed => {
    //         breedsFormArray.push(this.fb.group({
    //             name: this.fb.group({
    //                 en: [breed.name.en],
    //                 th: [breed.name.th]
    //             }),
    //             _id: [breed._id]
    //         }));
    //     });
    // }

    setBreeds(breeds: IPetBreed[]): void {
        console.log('set breed call');
        const breedsFormArray = this.petForm.get('breeds') as FormArray;

        // Clear existing form array controls to avoid duplicate entries
        while (breedsFormArray.length) {
            breedsFormArray.removeAt(0);
        }

        breeds.forEach(breed => {
            const breedFormGroup = this.fb.group({
                name: this.fb.group({
                    en: [breed.name.en], // Added Validators if needed
                    th: [breed.name.th]  // Added Validators if needed
                }),
                _id: [breed._id]
            });
            breedsFormArray.push(breedFormGroup);
        });
    }

    onBreedChange(event: Event, index: number): void {
        const selectedBreed = (event.target as HTMLSelectElement).value;
        const breed = this.petBreeds.find(b => b.name.en === selectedBreed);

        if (breed) {
            const breedsFormArray = this.petForm.get('breeds') as FormArray;
            const breedFormGroup = breedsFormArray.at(index) as FormGroup;

            breedFormGroup.patchValue({
                name: {
                    en: breed.name.en,
                    th: breed.name.th
                },
                _id: breed._id
            });
        }
    }

    addBreed(): void {
        const breeds = this.petForm.get('breeds') as FormArray;
        breeds.push(this.fb.group({
            name: this.fb.group({
                en: [''],
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
    // END BREED

    //Tag
    get tags() {
        return this.petForm.get('tags') as FormArray;
    }

    onTagInput(): void {
        const inputValue = this.tagInputControl?.value?.toLowerCase();
        if (inputValue) {
            this.matchingTags = this.fetchMatchingTags(inputValue);
        } else {
            this.matchingTags = [];
        }
    }

    fetchMatchingTags(inputValue: string): PetTag[] {
        // Mocked example - replace with your actual tag fetching logic
        return this.petTags.filter(tag => tag.name.en.toLowerCase().includes(inputValue));
    }

    selectTag(tag: PetTag): void {
        if (!this.selectedTags.find(t => t._id === tag._id)) {
            this.selectedTags.push(tag);
            this.tags.push(this.fb.group({
                _id: [tag._id],
                name: this.fb.group({
                    en: [tag.name.en],
                    th: [tag.name.th]
                })
            }));
        }
        this.tagInputControl.reset();
        this.matchingTags = [];
    }

    addTagByInput(): void {
        const tagName = this.tagInputControl?.value?.trim();
        console.log("=tagName=")
        console.log(tagName)
        if (tagName) {
            const newTag: PetTag = {
                _id: '',
                name: { en: tagName, th: '' },
                type: { name: { en: '', th: '' }, _id: '' }
            };
            this.selectTag(newTag);
        }
    }

    addTag(): void {
        const tags = this.petForm.get('tags') as FormArray;
        tags.push(this.fb.group({
            name: '',
            _id: ''
        }));
    }

    removeTag(tag: PetTag): void {
        const index = this.selectedTags.indexOf(tag);
        if (index >= 0) {
            this.selectedTags.splice(index, 1);
            this.tags.removeAt(index);
        }
    }

    removeaddTagLast(): void {
        if (this.tags.length > 0) {
            this.tags.removeAt(this.tags.length - 1);
        }
    }

    setTags(tags: PetTag[]): void {
        const tagsFormArray = this.petForm.get('tags') as FormArray;

        // Clear existing form array controls to avoid duplicate entries
        while (tagsFormArray.length) {
            tagsFormArray.removeAt(0);
        }

        tags.forEach(tag => {
            console.log('tag', tag.name.en)
            const tagFormGroup = this.fb.group({
                name: this.fb.group({
                    en: [tag.name.en], // Added Validators if needed
                    th: [tag.name.th]  // Added Validators if needed
                }),
                _id: [tag._id],
                type: {
                    name: {
                        en: [tag.type.name.en],
                        th: [tag.type.name.th]
                    },
                    _id: [tag.type._id]
                }
            });
            tagsFormArray.push(tagFormGroup);
        });
    }
    // End Tag

    //Color
    get colors() {
        return this.petForm.get('colors') as FormArray;
    }

    addColor(): void {
        const colors = this.petForm.get('colors') as FormArray;
        colors.push(this.fb.group({
            name: this.fb.group({
                en: [''],
                th: ['']
            }),
            _id: ['']
        }));
    }

    removeaddColorLast(): void {
        if (this.colors.length > 0) {
            this.colors.removeAt(this.colors.length - 1);
        }
    }

    setColors(colors: PetColor[]): void {
        const colorsFormArray = this.petForm.get('colors') as FormArray;

        // Clear existing form array controls to avoid duplicate entries
        while (colorsFormArray.length) {
            colorsFormArray.removeAt(0);
        }

        colors.forEach(color => {
            const colorFormGroup = this.fb.group({
                name: this.fb.group({
                    en: [color.name.en], // Added Validators if needed
                    th: [color.name.th]  // Added Validators if needed
                }),
                _id: [color._id]
            });
            colorsFormArray.push(colorFormGroup);
        });
    }

    // End Color

    onSubmit(): void {
        console.log('handel submit form')

        if (this.petForm.invalid) {
            this.logInvalidControls(this.petForm);
            return;
        }

        //this.isLoading = true;

        // Transform form data to only include breed IDs
        // const formValue = this.petForm.value;
        // console.log(formValue.breeds)
        // const transformedBreeds = formValue.breeds.map((breed: any) => breed._id);
        // const transformedColors = formValue.colors.map((color: any) => color._id);
        // const transformedTags = formValue.tags.map((tag: any) => tag._id);
        // const transformedFormData = {
        //     ...formValue,
        //     breeds: transformedBreeds,
        //     colors: transformedColors,
        //     tags: transformedTags,
        // };
        // const petData = this.petForm.value as IPetModel;

        // Transform form data
        const transformedFormData = this.transformFormValues(this.petForm.value);

        console.log("=Submit Form=")
        console.log(transformedFormData)

        if (this.petId) {
            console.log("=update=")
            this.petService.updatePet(this.petId, transformedFormData).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/apps/pet-managements']);
            });
        } else {
            console.log("=create=")
            this.petService.createPet(transformedFormData).subscribe(() => {
                this.isLoading = false;
                this.router.navigate(['/apps/pet-managements']);
            });
        }
    }

    transformFormValues(formValue: any): any {
        // Transform breeds to only include _id
        const transformedBreeds = formValue.breeds.map((breed: any) => breed._id);
        const transformedColors = formValue.colors.map((color: any) => color._id);
        const transformedTags = formValue.tags.map((tag: any) => tag._id);

        // Transform dates from mm/dd/yyyy to yyyy-mm-dd
        console.log(formValue.birthDate)
        console.log(formValue.adoptionDate)
        //const transformedBirthDate = this.formatDate(formValue.birthDate);
        //const transformedAdoptionDate = this.formatDate(formValue.adoptionDate);

        // Transform the form values
        const transformedValues = {
            ...formValue,
            breedIds: transformedBreeds, //transform and rename
            colors: transformedColors,
            tags: transformedTags,
            //birthDate: transformedBirthDate,
            //adoptionDate: transformedAdoptionDate,
            typeId: formValue.type, // Rename 
            //breedIds: formValue.breeds // Rename 
            birthDateType: "year",
            weightUnit: "kg",

        };

        // Delete the original breedType
        delete transformedValues.type;
        delete transformedValues.breeds;
        //delete transformedValues.weightUnit;

        return transformedValues;
    }

    onPetTypeChange(event: Event): void {
        const selectedTypeId = (event.target as HTMLSelectElement).value;
        console.log('Selected pet type ID:', selectedTypeId);
        if (selectedTypeId) {
            this.petBreedService.getBreedsType(selectedTypeId).subscribe((breeds: any[]) => {
                console.log('call pet breed')
                console.log(breeds)
                this.petBreeds = breeds;
            });
        }
    }

    formatDate(dateString: string): string {
        if (!dateString) return '';

        const [month, day, year] = dateString.split('/');
        return `${year}-${this.padZero(month)}-${this.padZero(day)}`;
    }

    padZero(value: string | undefined): string {
        if (!value || value.length === 0) return '00';
        return value.length === 1 ? `0${value}` : value;
    }

    logInvalidControls(formGroup: FormGroup): void {
        Object.keys(formGroup.controls).forEach(key => {
            const control = formGroup.get(key);
            if (control instanceof FormGroup) {
                this.logInvalidControls(control);
            } else if (control?.invalid) {
                console.log(`Invalid Control: ${key}, Errors:`, control.errors);
            }
        });
    }
}
