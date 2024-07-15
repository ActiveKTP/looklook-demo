import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionListingComponent } from './subscription-listing.component';

describe('SubscriptionListingComponent', () => {
  let component: SubscriptionListingComponent;
  let fixture: ComponentFixture<SubscriptionListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
