import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos: Contatos [] = [];

  estaCarregando: boolean = false;
  erroNoCarregamento: boolean = false;

  constructor(
    private contatoService: ContatosService, 
    private router: Router,
    private toastr: ToastrService,) 
  { }

  ngOnInit() {
    this.carregarContatos();
  }

  carregarContatos() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.contatoService.getContatos()
      .pipe(
        take(1),
        // take(1) para rodar a aplicaçao apenas uma vez ("fazer desinscrição")
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSucesso(response),
        error => this.onError(error),
      )
  }

  onSucesso(response: Contatos[]) {
    this.contatos = response;
  }

  onError(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  // função para redirecionar para página que lista os dados pelo id
  irParaDetalhes(idContato: number) {
    this.router.navigate([`contatos/${idContato}`])
  }

  irParaEditar(idContato: number) {
    this.router.navigate([`contatos/${idContato}/editar`])
  }

  deletarContato(idContato: number) {
    this.contatoService.deleteContato(idContato.toString())
    .subscribe(
      response => this.onSucessoDeletar(idContato),
      error => this.onErroDeletar(),
    )
  }

  onSucessoDeletar(idContato: number) {
    this.toastr.success('Sucesso!', 'Contato deletado com sucesso2')
    // mensagem do toastr

    this.contatos = this.contatos.filter(contato => contato.id !== idContato);
  }

  onErroDeletar() {
    console.log('Erro ao deletar');
  }

  // função para o botão de direcionar para criação de contato
  novoContato() {
    this.router.navigate(['contatos/novo']);
  }

}
