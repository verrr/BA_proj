import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardOpeningComponent } from './job-card-opening.component';

describe('JobCardOpeningComponent', () => {
  let component: JobCardOpeningComponent;
  let fixture: ComponentFixture<JobCardOpeningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardOpeningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
