import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListingComponent } from './category-listing/category-listing.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbCollapseModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SharedModule } from 'src/app/_metronic/shared/shared.module';
import { CrudModule } from 'src/app/modules/crud/crud.module';

@NgModule({
  declarations: [CategoryDetailsComponent, CategoryListingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoryListingComponent,
      },
      {
        path: ':id',
        component: CategoryDetailsComponent,
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
export class CategoryModule {}
