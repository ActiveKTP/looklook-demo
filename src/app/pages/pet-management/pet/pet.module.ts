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
import { PetListingComponent } from './pet-listing/pet-listing.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetFormComponent } from './pet-form/pet-form.component'; // Import PetFormComponent




@NgModule({
  declarations: [PetListingComponent, PetDetailsComponent, PetFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PetListingComponent,
      },
      {
        path: 'add',
        component: PetFormComponent, // Add route for adding a pet
      },
      {
        path: 'edit/:id',
        component: PetFormComponent, // Add route for editing a pet
      },
      {
        path: ':id',
        component: PetDetailsComponent,
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
export class PetModule { }
