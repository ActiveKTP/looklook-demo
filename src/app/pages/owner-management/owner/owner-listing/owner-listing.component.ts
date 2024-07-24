import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { OwnerService } from 'src/app/_fake/services/owner-management/owner.service';
import { DataTablesResponse, IOwnerModel,  } from 'src/app/_fake/services/owner-management/owner.interface';
import { SweetAlertOptions } from 'sweetalert2';
import moment from 'moment';
import { IRoleModel, RoleService } from 'src/app/_fake/services/role.service';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-owner-listing',
  templateUrl: './owner-listing.component.html',
  styleUrl: './owner-listing.component.scss'
})
export class OwnerListingComponent implements OnInit, AfterViewInit, OnDestroy {

  isCollapsed1 = false;
  isCollapsed2 = false;

  isLoading = false;

  owners: DataTablesResponse;

  datatableConfig: Config = {};

  // Reload emitter inside datatable
  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  // Single model
  aOwner: Observable<IOwnerModel>;
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
  };

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  roles$: Observable<DataTablesResponse>;
  constructor(
    private apiService: OwnerService,
    private roleService: RoleService,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.datatableConfig = {
      serverSide: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.apiService.getOwners(dataTablesParameters).subscribe((resp: DataTablesResponse) => {
          console.log(resp)
          console.log('================')
          console.log(dataTablesParameters)
          callback({
            draw: dataTablesParameters.draw,
            recordsTotal: resp.total,
            recordsFiltered: resp.total,
            data: resp.users
          });
        });
      },
      columns: [
        {
          title: 'Name',
          data: 'displayName',
          render: function (data, type, full) {
            const colorClasses = ['success', 'info', 'warning', 'danger'];
            const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];

            const initials = data[0].toUpperCase();
            const symbolLabel = `
              <div class="symbol-label fs-3 bg-light-${randomColorClass} text-${randomColorClass}">
                ${initials}
              </div>
            `;

            const nameAndEmail = `
              <div class="d-flex flex-column" data-action="view" data-id="${full.id}">
                <a href="javascript:;" class="text-gray-800 text-hover-primary mb-1">${data}</a>
              <span>${full.email}</span>
              </div>
            `;

            return `
            <div class="symbol symbol-circle symbol-50px overflow-hidden me-3" data-action="view" data-id="${full.id}">
              <a href="javascript:;">
                ${symbolLabel}
              </a>
            </div>
            ${nameAndEmail}
          `;
          }
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
          title: 'Suspended', data: 'suspended', render: function (data, type, row) {
            const name = data;
            return name || '';
          },
          orderData: [1],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
        {
          title: 'Active', data: 'active', render: function (data, type, row) {
            const name = data;
            return name || '';
          },
          orderData: [1],
          orderSequence: ['asc', 'desc'],
          type: 'string',
        },
      ],
      createdRow: function (row, data, dataIndex) {
        $('td:eq(0)', row).addClass('d-flex align-items-center');
      },
    };

    //this.roles$ = this.roleService.getRoles();

  }

  delete(id: string) {
    this.apiService.deleteOwner(id).subscribe(() => {
      this.reloadEvent.emit(true);
    });
  }

  edit(id: string) {
    this.aOwner = this.apiService.getOwner(id);
    this.aOwner.subscribe((owner: IOwnerModel) => {
      this.ownerModel = owner;
    });
  }

  create() {
    this.ownerModel = {
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
  }

  onSubmit(event: Event, myForm: NgForm) {
    if (myForm && myForm.invalid) {
      return;
    }

    this.isLoading = true;

    const successAlert: SweetAlertOptions = {
      icon: 'success',
      title: 'Success!',
      text: this.ownerModel._id != ''
        ? 'Owner updated successfully!'
        : 'Owner created successfully!',
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
        .updateOwner(this.ownerModel._id, this.ownerModel)
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
        .createOwner(this.ownerModel)
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

    if (this.ownerModel._id != '') {
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

}
