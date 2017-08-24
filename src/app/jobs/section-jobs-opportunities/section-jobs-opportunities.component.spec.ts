import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionJobsOpportunitiesComponent } from './section-jobs-opportunities.component';

describe('SectionJobsOpportunitiesComponent', () => {
  let component: SectionJobsOpportunitiesComponent;
  let fixture: ComponentFixture<SectionJobsOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionJobsOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionJobsOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
