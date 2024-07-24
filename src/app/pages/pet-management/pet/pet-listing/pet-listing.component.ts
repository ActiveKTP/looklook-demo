import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/_fake/services/pet-management/pet.service';
import { PetTypeService } from 'src/app/_fake/services/pet-management/type.service';
import { PetColorService } from 'src/app/_fake/services/pet-management/color.service';
import { PetTagService } from 'src/app/_fake/services/pet-management/tag.service';
import { PetBreedService } from 'src/app/_fake/services/pet-management/breed.service';
import { PetGroupAgeService } from 'src/app/_fake/services/pet-management/groupAge.service';
import { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';
import { IRoleModel, RoleService } from 'src/app/_fake/services/role.service';
import { IOwnerModel } from 'src/app/_fake/services/owner-management/owner.interface'
import { DataTablesResponse, IPetModel, PetTypesResponse, PetColorsResponse, PetTagsResponse } from 'src/app/_fake/services/pet-management/pet.interface'
import { Config } from 'datatables.net';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pet-listing',
  templateUrl: './pet-listing.component.html',
  styleUrl: './pet-listing.component.scss'
})
export class PetListingComponent implements OnInit, AfterViewInit, OnDestroy {

  isCollapsed1 = false;
  isCollapsed2 = false;

  isLoading = false;

  pets: DataTablesResponse;

  datatableConfig: Config = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();
  //@Output() reloadEvent = new EventEmitter<boolean>();

  // Single model
  aPet: Observable<IPetModel>;

  petModel: IPetModel = {
    _id: '',
    type: null,
    breedType: '',
    breeds: null,
    photoUrl: '',
    name: '',
    size: '',
    bloodGroup: '',
    weight: 0,
    weightUnit: '',
    birthDate: '',
    birthYear: 0,
    adoptionDate: '',
    tags: null,
    about: '',
    colors: null,
    certifiedPedigreeUrl: '',
    petMedicals: [],
    owner: null,
    active: false,
    deleted: false,
    deleteReason: {
      reason: '',
      remark: '',
    },
    groupOfAge: {
      en: '',
      th: '',
    },
    gender: {
      en: '',
      th: '',
    },
    createdAt: '',
    updatedAt: '',
  };

  ownerModel: IOwnerModel = {
    deleteReason: {
      reason: '',
      remark: '',
    },
    _id: '',
    email: '',
    displayName: '',
    avatarUrl: '',
    active: false,
    suspended: false,
    suspendRequest: '',
    createdAt: '',
    updatedAt: '',
  }

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  roles$: Observable<DataTablesResponse>;
  petTypes$: Observable<PetTypesResponse>;
  petColors$: Observable<PetColorsResponse>;
  petTags$: Observable<PetTagsResponse>;
  petBreed$: Observable<any>;
  petGroupAge$: Observable<any>;

  constructor(
    private apiService: PetService,
    private roleService: RoleService,
    private petTypeService: PetTypeService,
    private petBreedService: PetBreedService,
    private petGroupAgeService: PetGroupAgeService,
    private petColorService: PetColorService,
    private petTagService: PetTagService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.datatableConfig = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiService.getPets(dataTablesParameters).subscribe((resp: DataTablesResponse) => {
          callback({
            draw: dataTablesParameters.draw,
            recordsTotal: resp.total,
            recordsFiltered: resp.total,
            data: resp.pets
          });
          console.log(resp);
        });
      },
      columns: [
        {
          title: 'Type',
          data: 'type',
          render: function (data, type, full) {
            const colorClasses = ['success', 'info', 'warning', 'danger'];
            //const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

            //const initials = data[0].toUpperCase();
            if (full.type.name.en == 'cat') {
              var symbolLabel = `
              <div class="symbol-label fs-3 bg-light-warning text-warning">
              ${full.type.name.en}
              </div>
            `;
            } else {
              var symbolLabel = `
              <div class="symbol-label fs-3 bg-light-info text-info">
              ${full.type.name.en}
              </div>
            `;
            }

            return `
              <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${full._id}">
                <a href="javascript:;">
                  ${symbolLabel}
                </a>
              </div>
            `;
          }
        },
        // {
        //   title: 'Type', 
        //   data: 'type', 
        //   render: function (data, type, row, meta) {
        //     if(row.type.name.en=='cat'){
        //       return `<div class="symbol symbol-circle symbol-50px overflow-hidden me-5" data-action="view">
        //     <a href="javascript:;">
        //       ${row.type.name.en}
        //        </a>
        //     </div>`;
        //     }else{
        //       return `<div class="symbol symbol-circle symbol-50px overflow-hidden me-5" data-action="view">
        //      <a href="javascript:;">
        //       ${row.type.name.en}
        //        </a>
        //     </div>`;
        //     }
        //     //return row.type.name.en;
        //     },
        //     orderable: false,
        //     //type: 'string',
        // },
        {
          title: 'Name', data: 'name', render: function (data, type, row) {
            const name = row.name;
            return name || '';
          },
          orderData: [1],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        {
          title: 'Breeds', data: 'breeds', render: function (data, type, row) {
            const breedName = row.breeds[0]?.name?.th;
            return breedName || '';
          },
          orderData: [2],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        // {
        //   title: 'Tags', data: 'tags', render: function (data, type, row) {
        //     const tagsName = row.tags[0]?.name?.th;
        //     return tagsName || '';
        //   },
        //   orderData: [1],
        //   orderSequence: ['asc', 'desc'],
        //   type: 'string',
        // },
        {
          title: 'Gender',
          data: 'gender',
          render: (data, type, row) => {
            const genderName = row.gender?.en;
            if (genderName == 'male') {
              return `<i class="fa-solid fa-mars fs-2 text-primary"></i>`;
            } else if (genderName == 'female') {
              return `<i class="fa-solid fa-venus fs-2 text-info"></i>`;
            } else {
              return `<i class="fa-solid fa-genderless fs-2"></i>`;
            }
          },
          orderData: [3],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        {
          title: 'Joined Date', data: 'createdAt', render: function (data) {
            return moment(data).format('DD MMM YYYY, hh:mm a');
          },
          orderData: [4],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        {
          title: 'Owner', data: 'owner', render: function (data, type, row) {
            const breedName = row.owner?.email;
            return breedName || '';
          },
          orderData: [2],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        }
      ],
      createdRow: function (row, data, dataIndex) {
        $('td:eq(0)', row).addClass('d-flex align-items-center');
      },
    };

    //this.roles$ = this.roleService.getRoles();

    this.petTypes$ = this.petTypeService.getTypes();
    console.log(this.petTypes$);

    // this.petBreed$ = this.petBreedService.getBreeds();
    // console.log(this.petBreed$);

    this.petGroupAge$ = this.petGroupAgeService.getGroupOfAges();
    console.log(this.petGroupAge$);

    this.petColors$ = this.petColorService.getColors();
    console.log(this.petColors$);

    this.petTags$ = this.petTagService.getTags();
    console.log(this.petTags$);

  }

  delete(_id: string) {
    console.log('=delete=')
    console.log(_id)

    const completeFn = () => {
      this.isLoading = false;
    };

    this.apiService.deletePet(_id).subscribe({
      next: () => {
          console.log('delete complete')
          this.reloadEvent.emit(true);
      },
      error: (err) => {
          console.error('Error deleting pet', err);
          alert('An error occurred while deleting the pet.');
      },
      complete: completeFn,
  });
  }

  edit(_id: string) {
    console.log('event id ==>')
    console.log(_id)
    this.aPet = this.apiService.getPet(_id);
    this.aPet.subscribe((pet: IPetModel) => {
      console.log('this pet-list-component')
      console.log(pet.type?._id)
      this.petModel = pet;
    });
  }

  create() {
    this.petModel = {
      _id: '',
      type: null,
      breedType: '',
      breeds: null,
      photoUrl: '',
      name: '',
      size: '',
      bloodGroup: '',
      weight: 0,
      weightUnit: '',
      birthDate: '',
      birthYear: 0,
      adoptionDate: '',
      tags: null,
      about: '',
      colors: null,
      certifiedPedigreeUrl: '',
      petMedicals: [],
      owner: null,
      active: false,
      deleted: false,
      deleteReason: {
        reason: '',
        remark: '',
      },
      groupOfAge: {
        en: '',
        th: '',
      },
      gender: {
        en: '',
        th: '',
      },
      createdAt: '',
      updatedAt: '',
    };
  }

  onSubmit(event: Event, myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    this.isLoading = true;

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: this.petModel._id != ''
        ? 'User updated successfully!'
        : 'User created successfully!',
    };
    const errorAlert: SweetAlertOptions = {
      icon: 'error',
      title: 'Error!',
      text: '',
    };

    const completeFn = () => {
      this.isLoading = false;
    };

    const updateFn = () => {
      this.apiService
        .updatePet(this.petModel._id, this.petModel)
        .subscribe({
          next: () => {
            this.showAlert(successAlert);
            this.reloadEvent.emit(true);
          },
          error: (error) => {
            errorAlert.text = this.extractText(error.error);
            this.showAlert(errorAlert);
            this.isLoading = false;
          },
          complete: completeFn,
        });
    };

    const createFn = () => {
      this.apiService
        .createPet(this.petModel)
        .subscribe({
          next: () => {
            this.showAlert(successAlert);
            this.reloadEvent.emit(true);
          },
          error: (error) => {
            errorAlert.text = this.extractText(error.error);
            this.showAlert(errorAlert);
            this.isLoading = false;
          },
          complete: completeFn,
        });
    };

    if (this.petModel._id != '') {
      updateFn();
    } else {
      createFn();
    }
  }

  extractText(obj: any): string {
    var textArray: string[] = [];

    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        // If the value is a string, add it to the 'textArray'
        textArray.push(obj[key]);
      } else if (typeof obj[key] === 'object') {
        // If the value is an object, recursively call the function and concatenate the results
        textArray = textArray.concat(this.extractText(obj[key]));
      }
    }

    // Use a Set to remove duplicates and convert back to an array
    var uniqueTextArray = Array.from(new Set(textArray));

    // Convert the uniqueTextArray to a single string with line breaks
    var text = uniqueTextArray.join('\n');

    return text;
  }

  showAlert(swalOptions: SweetAlertOptions) {
    let style = swalOptions.icon?.toString() || 'success';
    if (swalOptions.icon === 'error') {
      style = 'danger';
    }
    this.swalOptions = Object.assign({
      buttonsStyling: false,
      confirmButtonText: "Ok, got it!",
      customClass: {
        confirmButton: "btn btn-" + style
      }
    }, swalOptions);
    this.cdr.detectChanges();
    this.noticeSwal.fire();
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }

  onPetTypeSelect(petType: string): void {
    //this.petBreed$ = this.petBreedService.getBreedsType(petType);
  }

  selectedPetType: string;

  onPetTypeChange(petType: string) {
    console.log('petType==', petType)
    this.selectedPetType = petType; // Set selected pet type
    this.petBreed$ = this.petBreedService.getBreedsType(petType); // Load breeds for the selected type
  }

}
