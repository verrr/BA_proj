import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionHeaderComponent } from './page-section-header.component';

describe('PageSectionHeaderComponent', () => {
  let component: PageSectionHeaderComponent;
  let fixture: ComponentFixture<PageSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
