import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OwnerService } from 'src/app/_fake/services/owner-management/owner.service'
import { IOwnerModel } from 'src/app/_fake/services/owner-management/owner.interface'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.scss'
})
export class OwnerDetailsComponent implements OnInit {
  owner$!: Observable<IOwnerModel>;

  constructor(
    private route: ActivatedRoute,
    private ownerService: OwnerService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const ownerId = params.get('id');
      if (ownerId) {
        this.owner$ = this.ownerService.getOwner(ownerId);
      }
    });
  }

  messageOwner(ownerId: string): void {
    // Implement the logic to message the owner
    console.log('Message owner with ID:', ownerId);
  }

  suspendOwner(ownerId: string): void {
    // Implement the logic to suspend the owner
    console.log('Suspend owner with ID:', ownerId);
  }

}
