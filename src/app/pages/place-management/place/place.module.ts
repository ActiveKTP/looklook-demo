import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceListingComponent } from './place-listing/place-listing.component';
import { RouterModule } from '@angular/router';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { CrudModule } from 'src/app/modules/action-crud/crud.module';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [PlaceListingComponent, PlaceDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaceListingComponent,
      },
      {
        path: ':id',
        component: PlaceDetailsComponent,
      },
    ]),
    CrudModule,
    SharedModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbCollapseModule,
    NgbTooltipModule,
    SweetAlert2Module.forChild(),
  ],
})
export class PlaceModule {}
