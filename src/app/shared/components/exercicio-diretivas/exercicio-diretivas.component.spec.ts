import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDiretivasComponent } from './exercicio-diretivas.component';

describe('ExercicioDiretivasComponent', () => {
  let component: ExercicioDiretivasComponent;
  let fixture: ComponentFixture<ExercicioDiretivasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExercicioDiretivasComponent]
    });
    fixture = TestBed.createComponent(ExercicioDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
