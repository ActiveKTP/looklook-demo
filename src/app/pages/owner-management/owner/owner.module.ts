import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  NgbNavModule, 
  NgbDropdownModule, 
  NgbCollapseModule, 
  NgbTooltipModule 
} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { CrudModule } from 'src/app/modules/action-crud/crud.module';
import { OwnerListingComponent } from './owner-listing/owner-listing.component';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';



@NgModule({
  declarations: [
    OwnerListingComponent, 
    OwnerDetailsComponent,
    OwnerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OwnerListingComponent,
      },
      {
        path: 'add',
        component: OwnerFormComponent, // Add route for adding a pet
      },
      {
        path: 'edit/:id',
        component: OwnerFormComponent, // Add route for editing a pet
      },
      {
        path: ':id',
        component: OwnerDetailsComponent,
      },
    ]),
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ]
})
export class OwnerModule { }
