import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class NaoEstaLogadoGuard implements CanActivate {
  // componente NaoEstaLogadoGuard para nao acessar login caso logado

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const estaLogado = this.authService.estaLogado();

    if (!estaLogado) {
      return true;
    }
    
    this.router.navigate(['home']);
    return false;
  }

};
