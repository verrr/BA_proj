import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionReferencesComponent } from './page-section-references.component';

describe('PageSectionReferencesComponent', () => {
  let component: PageSectionReferencesComponent;
  let fixture: ComponentFixture<PageSectionReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
