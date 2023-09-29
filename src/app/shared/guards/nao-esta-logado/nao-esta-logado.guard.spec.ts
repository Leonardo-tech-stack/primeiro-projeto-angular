import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { naoEstaLogadoGuard } from './nao-esta-logado.guard';

describe('naoEstaLogadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => naoEstaLogadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
