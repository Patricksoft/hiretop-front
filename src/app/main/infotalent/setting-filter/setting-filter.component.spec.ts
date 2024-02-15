import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingFilterComponent } from './setting-filter.component';

describe('SettingFilterComponent', () => {
  let component: SettingFilterComponent;
  let fixture: ComponentFixture<SettingFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
