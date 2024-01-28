import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesPromptsComponent } from './examples-prompts.component';

describe('ExamplesPromptsComponent', () => {
  let component: ExamplesPromptsComponent;
  let fixture: ComponentFixture<ExamplesPromptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplesPromptsComponent]
    });
    fixture = TestBed.createComponent(ExamplesPromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
