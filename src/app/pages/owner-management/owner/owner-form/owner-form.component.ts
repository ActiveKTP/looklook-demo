import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerService } from 'src/app/_fake/services/owner-management/owner.service';
import { IOwnerModel } from 'src/app/_fake/services/owner-management/owner.interface';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrl: './owner-form.component.scss'
})
export class OwnerFormComponent implements OnInit {
  ownerForm: FormGroup;
  isEditMode: boolean = false;
  ownerId: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private ownerService: OwnerService
  ) {
    this.ownerForm = this.fb.group({
      displayName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      avatarUrl: [''],
      active: [true],
      suspended: [false],
      suspendRequest: [''],
      deleteReason: [''],
      createdAt: [{ value: '', disabled: true }],
      updatedAt: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.ownerId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!this.ownerId;

    if (this.ownerId) {
      this.ownerService.getOwner(this.ownerId).subscribe(owner => {
        console.log('owner',owner)
        //this.ownerForm.patchValue(owner);
        this.ownerForm.patchValue({
          ...owner,
          deleteReason: owner.deleteReason?.reason,
      });
      });
    }
  }

  onSubmit(): void {

    if (this.ownerForm.invalid) {
      return;
    }

    const ownerData: IOwnerModel = this.ownerForm.getRawValue();

    if (this.ownerId) {
      console.log("=update=")
      this.ownerService.updateOwner(this.ownerId, ownerData).subscribe(() => {
        this.router.navigate(['/apps/owner-managements', this.ownerId]);
      });
    } else {
      console.log("=create=")
      this.ownerService.createOwner(ownerData).subscribe(() => {
        this.router.navigate(['/apps/owner-managements']);
      });
    }
  }

}
