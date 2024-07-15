import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedListingComponent } from './breed-listing.component';

describe('BreedListingComponent', () => {
  let component: BreedListingComponent;
  let fixture: ComponentFixture<BreedListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreedListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
