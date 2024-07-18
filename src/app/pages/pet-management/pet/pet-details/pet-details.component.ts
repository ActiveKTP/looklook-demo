import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/_fake/services/pet-management/pet.service';
import { IPetModel } from 'src/app/_fake/services/pet-management/pet.interface'


@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.scss'
})
export class PetDetailsComponent implements OnInit {
  pet$!: Observable<IPetModel>;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const petId = params.get('id');
      if (petId) {
        this.pet$ = this.petService.getPet(petId);
      }
    });
  }

  followPet(petId: string): void {
    // Add follow pet logic here
  }

  adoptPet(petId: string): void {
    // Add adopt pet logic here
  }

}
