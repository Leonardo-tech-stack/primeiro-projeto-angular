import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatos } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {

  contato!: Contatos;
  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;
  
  constructor(
    private route: ActivatedRoute,
    // lida com a rota/pagina atual

    private contatosService: ContatosService,
    private router: Router
  ){}

  ngOnInit() {
    const idContato = this.route.snapshot.paramMap.get('id');
    // snapshot "foto da tela atual"
    // paraMap faz mapeamento de todos parametros da URL

    console.log(idContato)
    // listando id do contato no console

    if (idContato !== null) {
      const idContatoNumber = Number(idContato);
      if (!isNaN(idContatoNumber)) {
        this.carregarContato(idContatoNumber);
        console.log(idContatoNumber);
      } else {
        console.error('ID de contato não é um número válido.');
      }
    } else {
      console.error('ID de contato está nulo.');
    }
  }

  carregarContato(idContato: number) {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContatoStr = idContato.toString();

    this.contatosService.getContatoId(idContatoStr)
      .pipe (
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe (
        response => this.onSucesso(response),
        error => this.onErro(error),
      )
  }

  onErro(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  onSucesso(response: Contatos) {
    this.contato = response;
    console.log(this.contato);
  }

  voltar() {
    this.router.navigate([`contatos`]);
  }
}
