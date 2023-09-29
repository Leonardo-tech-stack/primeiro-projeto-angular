import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<router-outlet></router-outlet>',
  // pode ser feito dessa forma apagando app html

  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  variavelNoApp = 'primeira varivel criada no app.components.ts';
  favoriteColorNoApp = 'cor vermelha (segunda variavel) criada no app.components.ts';
  // no exercicio-data-binding

  seiLa = 'tipo texto';
  outra = 2;
  // variaveis exemplo para importar de pai pra filho
  // no header

  titulo = 'Leonardo';

  meuNumero = 10;

  constructor() {
    console.log('Passei por aqui!');

    setTimeout(() => {
      this.titulo = 'titulo foi mudado depois de 3 segundos';
      this.meuNumero = 100;
      console.log('passa aqui depois de 3');
    }, 3000);
  }

  eventoRecebido($event: Event) {
    console.log('App component: evento recebido!')
  }
  
  valorDoContador = 0;

  // showHeader foi aplicada no componente header para desaparecer após 6 segundos
  showHeader = true;

  ngOnInit() {
    setTimeout(() => {
      this.titulo = 'Outra Coisa';

      setTimeout(() => {
        this.showHeader = false;
      }, 3000);
      // codigo foi comentado para desativar
    
    }, 3000);
  }

}