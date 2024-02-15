import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOfferAppliesComponent } from './company-offer-applies.component';

describe('CompanyOfferAppliesComponent', () => {
  let component: CompanyOfferAppliesComponent;
  let fixture: ComponentFixture<CompanyOfferAppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyOfferAppliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyOfferAppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
