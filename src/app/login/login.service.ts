import { Injectable } from '@angular/core';
import { Observable, delay, mergeMap, of, tap, throwError, timer } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService,
  ) { }

  logar(email: string, senha: string): Observable<LoginResponse> {
    // return this.http.post(this.API_URL + '/auth', {
    //   email,
    //   senha
    // })
    // caso tivesse uma api, iria chamar mais ou menos da forma acima

    // aqui esta sendo criado uma verificação manual pelo fato de nao ter uma api pra isso
    if(email === 'leo@email.com' && senha === '123') {
      return of({
        usuario: {
          nome: 'Leo',
          sobrenome: 'Almeida',
          email: 'leo@email.com',
        },
        token: 'abc',
      })
      .pipe(
        delay(2000),
        // tap está setando os dados do usuario que existe no localstorage (acho)
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })  
      );
    }

    return timer(3000).pipe(
      mergeMap(() => throwError('Usuario ou senha incorretos'))
    )  
  }


}
