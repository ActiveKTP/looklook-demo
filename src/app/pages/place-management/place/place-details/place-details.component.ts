import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IPlaceModel,
  PlaceService,
} from 'src/app/_fake/services/place-management/place-service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss'],
})
export class PlaceDetailsComponent implements OnInit, AfterViewInit {
  isCollapsed: boolean;

  place: IPlaceModel = {
    _id: '',
    title: '',
    subtitle: '',
    description: '',
    address: '',
    subdistrict: '',
    district: '',
    province: '',
    postCode: '',
    logoUrl: '',
    location: {
      lat: 0,
      long: 0,
    },
    contact: {
      mobileNumbers: [],
      facebook: '',
      instagram: '',
      email: '',
      website: '',
    },
    // coverImages: [],
    // category: {},
    // subcategory: {},
    tags: [],
    isVip: false,
    active: false,
    createdAt: '',
    updatedAt: '',
    updatedBy: '',
    createdBy: null,
  };

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.placeService.getPlace(id).subscribe((res: IPlaceModel) => {
      this.place = res;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngAfterViewInit(): void {}
}
