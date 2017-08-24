import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionLocationComponent } from './page-section-location.component';

describe('PageSectionLocationComponent', () => {
  let component: PageSectionLocationComponent;
  let fixture: ComponentFixture<PageSectionLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
