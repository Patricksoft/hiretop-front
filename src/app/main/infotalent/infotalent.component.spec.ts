import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfotalentComponent } from './infotalent.component';

describe('InfotalentComponent', () => {
  let component: InfotalentComponent;
  let fixture: ComponentFixture<InfotalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfotalentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfotalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
