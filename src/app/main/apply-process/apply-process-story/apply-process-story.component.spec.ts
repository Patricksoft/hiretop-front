import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyProcessStoryComponent } from './apply-process-story.component';

describe('ApplyProcessStoryComponent', () => {
  let component: ApplyProcessStoryComponent;
  let fixture: ComponentFixture<ApplyProcessStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyProcessStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyProcessStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
