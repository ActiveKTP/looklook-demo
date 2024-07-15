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



@NgModule({
  declarations: [OwnerListingComponent, OwnerDetailsComponent],
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
