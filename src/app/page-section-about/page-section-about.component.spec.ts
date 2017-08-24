import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionAboutComponent } from './page-section-about.component';

describe('PageSectionAboutComponent', () => {
  let component: PageSectionAboutComponent;
  let fixture: ComponentFixture<PageSectionAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
