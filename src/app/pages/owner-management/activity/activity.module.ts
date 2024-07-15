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
import { ActivityListingComponent } from './activity-listing/activity-listing.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';



@NgModule({
  declarations: [ActivityListingComponent, ActivityDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActivityListingComponent,
      },
      {
        path: ':id',
        component: ActivityDetailsComponent,
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
export class ActivityModule { }
