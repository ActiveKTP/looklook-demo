import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import {
  DataTablesResponse,
  ITagModel,
  TagService,
} from 'src/app/_fake/services/place-management/tag.service';
import { SweetAlertOptions } from 'sweetalert2';

@Component({
  selector: 'app-tag-listing',
  templateUrl: './tag-listing.component.html',
  styleUrls: ['./tag-listing.component.scss'],
})
export class TagListingComponent implements OnInit, AfterViewInit, OnDestroy {
  isCollapsed1 = false;

  isLoading = false;

  tags$: Observable<DataTablesResponse>;

  reloadEvent: EventEmitter<boolean> = new EventEmitter();

  // Single model
  tag$: Observable<ITagModel>;
  tagModel: ITagModel = {
    id: 0,
    name: '',
    permissions: [],
    users: [],
  };

  @ViewChild('formModal')
  formModal: TemplateRef<any>;

  @ViewChild('noticeSwal')
  noticeSwal!: SwalComponent;

  swalOptions: SweetAlertOptions = {};

  modalConfig: NgbModalOptions = {
    modalDialogClass: 'modal-dialog modal-dialog-centered mw-650px',
  };

  private clickListener: () => void;

  constructor(
    private apiService: TagService,
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private modalService: NgbModal
  ) {}

  ngAfterViewInit(): void {
    this.clickListener = this.renderer.listen(document, 'click', (event) => {
      const closestBtn = event.target.closest('.btn');
      if (closestBtn) {
        const { action, id } = closestBtn.dataset;

        switch (action) {
          case 'view':
            break;

          case 'create':
            this.create();
            this.modalService.open(this.formModal, this.modalConfig);
            break;

          case 'edit':
            this.edit(id);
            this.modalService.open(this.formModal, this.modalConfig);
            break;

          case 'delete':
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    this.tags$ = this.apiService.getTags();
  }

  delete(id: number) {
    this.apiService.deleteTag(id).subscribe(() => {});
  }

  edit(id: number) {
    this.tag$ = this.apiService.getTag(id);
    this.tag$.subscribe((user: ITagModel) => {
      this.tagModel = user;
    });
  }

  create() {
    this.tagModel = { id: 0, name: '', permissions: [], users: [] };
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
        this.tagModel.id > 0
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
      this.modalService.dismissAll();
      this.tags$ = this.apiService.getTags();
      this.cdr.detectChanges();
    };

    const updateFn = () => {
      this.apiService.updateTag(this.tagModel.id, this.tagModel).subscribe({
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
      this.apiService.createTag(this.tagModel).subscribe({
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

    if (this.tagModel.id > 0) {
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
    if (this.clickListener) {
      this.clickListener();
    }
    this.modalService.dismissAll();
  }
}
