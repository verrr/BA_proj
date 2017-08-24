import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalMainTextComponent } from './promotional-main-text.component';

describe('PromotionalMainTextComponent', () => {
  let component: PromotionalMainTextComponent;
  let fixture: ComponentFixture<PromotionalMainTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionalMainTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalMainTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
