import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { ExtratoService } from './extrato.service';
// importação do arquivo service

import { Transacao } from './extrato.interfaces';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transacoes: Transacao[] = [];

  pagina = 1;
  // para limitação de listagem, como foi feito no chapterone

  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(private extratoService: ExtratoService) {
  
  }

  ngOnInit() {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes(this.pagina)
    // this.pagina para a limitação de listagem
      .pipe(
        take(1),
        // take(1) para rodar a aplicaçao apenas uma vez
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucesso(response),
        error => this.onError(error),
      )
  }

  onSucesso(response: Transacao[]) {
    this.transacoes = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  paginaAnterior() {
    this.pagina = this.pagina - 1;
    this.carregarExtrato();
  }

  proximaPagina() {
    this.pagina = this.pagina + 1;
    this.carregarExtrato();
  }

}
