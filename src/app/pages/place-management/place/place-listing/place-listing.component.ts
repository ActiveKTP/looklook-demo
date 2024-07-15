import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  IPlaceModel,
  PlaceService,
} from 'src/app/_fake/services/place-management/place-service';
import { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';
import { IRoleModel, RoleService } from 'src/app/_fake/services/role.service';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-place-listing',
  templateUrl: './place-listing.component.html',
  styleUrls: ['./place-listing.component.scss'],
})
export class PlaceListingComponent implements OnInit, AfterViewInit, OnDestroy {
  isCollapsed1 = false;
  isCollapsed2 = true;

  isLoading = false;

  places: DataTablesResponse;

  datatableConfig: Config = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  // Single model
  aPlace: Observable<IPlaceModel>;
  placeModel: IPlaceModel = {
    _id: '',
    title: '',
    subtitle: '',
    description: '',
    address: '',
    subdistrict: '',
    district: '',
    province: '',
    postCode: '',
    logoUrl: '',
    location: {
      lat: 0,
      long: 0,
    },
    contact: {
      mobileNumbers: [],
      facebook: '',
      instagram: '',
      email: '',
      website: '',
    },
    // coverImages: [],
    // category: {},
    // subcategory: {},
    tags: [],
    isVip: false,
    active: false,
    createdAt: '',
    updatedAt: '',
    updatedBy: '',
    createdBy: null,
  };

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  roles$: Observable<DataTablesResponse>;

  constructor(
    private apiService: PlaceService,
    private roleService: RoleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.datatableConfig = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiService.getPlaces(dataTablesParameters).subscribe((resp) => {
          callback(resp);
        });
      },
      columns: [
        {
          title: 'Image',
          data: 'logoUrl',
          render(data, type, row, meta) {
            if (row.logoUrl)
              return `<div class="symbol symbol-50px me-5">
                        <img alt="Logo" src="${row.logoUrl}" alt="${row.title}" />
                      </div>`;
            else
              return `<div class="symbol symbol-50px me-5">
                        <img alt="Logo" src="../../../../../assets/media/avatars/blank.png" alt="blank" />
                      </div>`;
          },
          orderable: false,
        },
        {
          title: 'Title',
          data: 'title',
          render: function (data) {
            return `${data}`;
          },
        },
        {
          title: 'Address',
          data: 'address',
          render: function (data) {
            return `${data}`;
          },
        },
        {
          title: 'Created Date',
          data: 'createdAt',
          render: function (data) {
            return moment(data).format('DD MMM YYYY, hh:mm a');
          },
        },
      ],
      createdRow: function (row, data, dataIndex) {
        $('td:eq(0)', row).addClass('d-flex align-items-center');
      },
    };

    // this.roles$ = this.roleService.getRoles();
  }

  delete(id: string) {
    this.apiService.deletePlace(id).subscribe(() => {
      this.reloadEvent.emit(true);
    });
  }

  edit(id: string) {
    this.aPlace = this.apiService.getPlace(id);
    this.aPlace.subscribe((place: IPlaceModel) => {
      this.placeModel = place;
    });
  }

  create() {
    this.placeModel = {
      _id: '',
      title: '',
      subtitle: '',
      description: '',
      address: '',
      subdistrict: '',
      district: '',
      province: '',
      postCode: '',
      logoUrl: '',
      location: {
        lat: 0,
        long: 0,
      },
      contact: {
        mobileNumbers: [],
        facebook: '',
        instagram: '',
        email: '',
        website: '',
      },
      // coverImages: [],
      // category: {},
      // subcategory: {},
      tags: [],
      isVip: false,
      active: false,
      createdAt: '',
      updatedAt: '',
      updatedBy: '',
      createdBy: null,
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
      text:
        this.placeModel._id !== ''
          ? 'Place updated successfully!'
          : 'Place created successfully!',
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
        .updatePlace(this.placeModel._id, this.placeModel)
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
      // this.placeModel.password = 'test123';
      this.apiService.createPlace(this.placeModel).subscribe({
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

    if (this.placeModel._id !== '') {
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
    this.swalOptions = Object.assign(
      {
        buttonsStyling: false,
        confirmButtonText: 'Ok, got it!',
        customClass: {
          confirmButton: 'btn btn-' + style,
        },
      },
      swalOptions
    );
    this.cdr.detectChanges();
    this.noticeSwal.fire();
  }

  ngOnDestroy(): void {
    this.reloadEvent.unsubscribe();
  }
}
