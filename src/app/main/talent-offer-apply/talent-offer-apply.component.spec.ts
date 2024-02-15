import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentOfferApplyComponent } from './talent-offer-apply.component';

describe('TalentOfferApplyComponent', () => {
  let component: TalentOfferApplyComponent;
  let fixture: ComponentFixture<TalentOfferApplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentOfferApplyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TalentOfferApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
