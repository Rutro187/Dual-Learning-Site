import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizGuardComponent } from './quiz-guard.component';

describe('QuizGuardComponent', () => {
  let component: QuizGuardComponent;
  let fixture: ComponentFixture<QuizGuardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizGuardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
