import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionJobsHeadlineComponent } from './section-jobs-headline.component';

describe('SectionJobsHeadlineComponent', () => {
  let component: SectionJobsHeadlineComponent;
  let fixture: ComponentFixture<SectionJobsHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionJobsHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionJobsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
