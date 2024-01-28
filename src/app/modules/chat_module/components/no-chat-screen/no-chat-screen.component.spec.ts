import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoChatScreenComponent } from './no-chat-screen.component';

describe('NoChatScreenComponent', () => {
  let component: NoChatScreenComponent;
  let fixture: ComponentFixture<NoChatScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoChatScreenComponent]
    });
    fixture = TestBed.createComponent(NoChatScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
