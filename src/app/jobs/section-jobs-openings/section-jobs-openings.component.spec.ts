import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionJobsOpeningsComponent } from './section-jobs-openings.component';

describe('SectionJobsOpeningsComponent', () => {
  let component: SectionJobsOpeningsComponent;
  let fixture: ComponentFixture<SectionJobsOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionJobsOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionJobsOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
