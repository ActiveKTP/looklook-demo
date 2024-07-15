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
import { SubscriptionListingComponent } from './subscription-listing/subscription-listing.component';
import { SubscriptionDetailsComponent } from './subscription-details/subscription-details.component';



@NgModule({
  declarations: [SubscriptionListingComponent, SubscriptionDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SubscriptionListingComponent,
      },
      {
        path: ':id',
        component: SubscriptionDetailsComponent,
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
export class SubscriptionModule { }
