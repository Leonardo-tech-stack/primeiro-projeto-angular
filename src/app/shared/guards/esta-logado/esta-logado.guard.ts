import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EstaLogadoGuard implements CanActivate {
  // canActivate usada para o angular saber se a rota vai ser ativada ou não

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const estaLogado = this.authService.estaLogado();

    if (estaLogado) {
      return true;
    }
    console.log('Passou pela guarda de rotas')
    // caso não esteja logado redireciona para o login
    this.router.navigate(['login']);
    return true;
  }

};
