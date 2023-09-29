import { Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: Usuario | null = null;
  token: string | null = null;

  constructor(
    private router: Router,
  ) { }

  // salvando usuario no localstorage
  setUsuario(usuario: any) {
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  // buscando
  getUsuario() {
    if (this.usuario) {
      return this.usuario;
    }

    const usuarioGuardado = localStorage.getItem('usuario');

    if(usuarioGuardado) {
      this.usuario = JSON.parse(usuarioGuardado);
      return this.usuario;
    }

    return null;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenGuardado = localStorage.getItem('token');

    if(tokenGuardado) {
      this.token = tokenGuardado;
      return this.token;
    }

    return null;
  }

  // função utilizada para verificar se está logado para passar para os guards
  estaLogado(): boolean {
    if (this.getUsuario() && this.getToken()) {
      return true;
    }
    return false;

    // outra forma
    // return this.getUsuario() && this.getToken() ? true : false;
  }

  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
