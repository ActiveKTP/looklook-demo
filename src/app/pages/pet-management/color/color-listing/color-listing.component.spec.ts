import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorListingComponent } from './color-listing.component';

describe('ColorListingComponent', () => {
  let component: ColorListingComponent;
  let fixture: ComponentFixture<ColorListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
