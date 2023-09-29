import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transacao } from './extrato.interfaces';
import { environment } from '../../environments/environment';
import { throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  API_URL = environment.API_URL;

  constructor(private http: HttpClient,) { }

  getTransacoes(page: number) {
    // return throwError(new Error('Erro genérico.'));
    // simulando erro generico para testar o booleano de erro

    // const error = throwError('Erro genérico.');
    // return timer(3000).pipe(mergeMap(() => error));
    // outra simulação
    
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      params: {
        _page: String(page),
        // _page especifica o numero de paginas chamadas da api
      }
      // params usado para a limitação de listagem, cada page tera uma quantidade de conteudo a ser mostrada
    });

    // outra forma
    // return this.http.get<Transacao[]>(this.API_URL + '/transacoes');
  }

}
