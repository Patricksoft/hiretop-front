import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCompanyDetailComponent } from './set-company-detail.component';

describe('SetCompanyDetailComponent', () => {
  let component: SetCompanyDetailComponent;
  let fixture: ComponentFixture<SetCompanyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetCompanyDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
