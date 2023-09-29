import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent {
  
  @Input() palavra: string = '';
  @Input() cor: string = '';
  // para importação de variavel de pai pra filho

  @Output() clicado = new EventEmitter();
  @Output() contador = new EventEmitter();

  //Input recebe informaçoes Output emite

  imageURL = 'https://raw.githubsercontent.com/vitorfgsantos/angular-memes-diretivas-master-images/javascript-1.jpg'

  initialValue = 'Valor inicial';

  isDisabled = true;

  acessibilityText = 'um outro texto (leitor de tela)'
  
  constructor() {
    setTimeout(() => {
      this.isDisabled = false;
      console.log('isDisabled: ', this.isDisabled)
    }, 4000)
  }

  clicou($event: MouseEvent) {
    console.log('clicou!', $event)
    // $event retorna todas as informaçoes sobre aquele evento
    // por exemplo, no (click) vai retornar no console essas informaçoes apos disparar essa função
  }

  clicouBotaoEmissor($event: MouseEvent) {
    console.log('Devo emitir informações para o componente pai.')
    this.clicado.emit($event);
    // this.clicado.emit(); chama o "clicado" e usa "emit" para emitir informaçoes para o elemento pai
  }

  valorDoInput = 'digite'

  digitouAlgo($event: KeyboardEvent) {
    if ($event.target instanceof HTMLInputElement) {
      const inputValue = $event.target.value;
      console.log(inputValue);
    }
  }

  passouOMouse() {
    console.log('alguem passou o mouse');
  }


  // diretivas
  deveExibir = true;

  // função para exibir e não exibir ao clique do botão
  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(numero1: number, numero2: number) {
    return numero1 + numero2;
  }

  condition() {

  }

  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  carrosLista = [{
    placa: 'JND-7438',
    cor: 'Preto',
  }, {
    placa: 'JGG-20394',
    cor: 'Azul',
  }, {
    placa: 'AGU-1452',
    cor: 'Branco',
  }, {
    placa: 'KJM-4852',
    cor: 'Vermelho',
  }]

}
