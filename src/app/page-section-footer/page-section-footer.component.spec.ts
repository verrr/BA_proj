import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionFooterComponent } from './page-section-footer.component';

describe('PageSectionFooterComponent', () => {
  let component: PageSectionFooterComponent;
  let fixture: ComponentFixture<PageSectionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
