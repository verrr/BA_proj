import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageModuleChatboxComponent } from './page-module-chatbox.component';

describe('PageModuleChatboxComponent', () => {
  let component: PageModuleChatboxComponent;
  let fixture: ComponentFixture<PageModuleChatboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageModuleChatboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageModuleChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
