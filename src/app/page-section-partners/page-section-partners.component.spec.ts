import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionPartnersComponent } from './page-section-partners.component';

describe('PageSectionPartnersComponent', () => {
  let component: PageSectionPartnersComponent;
  let fixture: ComponentFixture<PageSectionPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
