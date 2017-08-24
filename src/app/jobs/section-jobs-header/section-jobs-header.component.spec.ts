import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionJobsHeaderComponent } from './section-jobs-header.component';

describe('SectionJobsHeaderComponent', () => {
  let component: SectionJobsHeaderComponent;
  let fixture: ComponentFixture<SectionJobsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionJobsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionJobsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
