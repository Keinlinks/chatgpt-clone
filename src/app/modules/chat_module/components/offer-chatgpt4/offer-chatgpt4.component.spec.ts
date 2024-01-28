import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferChatgpt4Component } from './offer-chatgpt4.component';

describe('OfferChatgpt4Component', () => {
  let component: OfferChatgpt4Component;
  let fixture: ComponentFixture<OfferChatgpt4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferChatgpt4Component]
    });
    fixture = TestBed.createComponent(OfferChatgpt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
