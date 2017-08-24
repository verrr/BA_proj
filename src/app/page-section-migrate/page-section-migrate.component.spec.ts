import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSectionMigrateComponent } from './page-section-migrate.component';

describe('PageSectionMigrateComponent', () => {
  let component: PageSectionMigrateComponent;
  let fixture: ComponentFixture<PageSectionMigrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSectionMigrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSectionMigrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
