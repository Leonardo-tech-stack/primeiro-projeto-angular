import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('emailInput', { static: true }) emailInput!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
  // usado para validações, no caso o focus que foi usado para focar em um elemento 
  // (email ou senha) que esteja invalido

  // outra forma
  // login = {
  //   email: 'alsdkl',
  //   password: 'sd'
  // }

  email!: string;
  password!: string;

  estaCarregando!: boolean;

  erroNoLogin = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onSubmit(form: any) {

    if (!form.valid) {
      form.controls.email.markAsTouched();
      // função para esperar o usuario inserir e enviar o email de login, caso for invalido, retornar a mensagem de erro

      form.controls.password.markAsTouched();
      //mesma coisa só que para a senha

      if(form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
        // obs no viewchild
        return;
      }

      if(form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
        return;
      }

      return;
    }

    console.log(form.value);
    console.log(this.login)

    // outra forma
    // console.log('email: ', this.email);
    // console.log('email: ', this.password);

    this.login();
  }

  login() {
    this.estaCarregando = true;

    this.loginService.logar(this.email, this.password)
    .pipe(
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSucessoLogin(),
      error => this.onErroLogin(),
    );
  }

  onSucessoLogin() {
    this.router.navigate(['home']);
  }

  onErroLogin() {
    this.erroNoLogin = true;
  }

  // função para validação de email senha (retorna msg de erro)
  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      // "nomeControle" entre chaves para acessar a variavel no parametro de exibeErro
      return false;
    }
    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }
}
