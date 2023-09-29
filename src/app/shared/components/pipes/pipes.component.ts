import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
// necessario importar pipe caso for usar fora do html

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
  providers: [
    DecimalPipe,
  ]
  // necessario caso for usar fora do html

})
export class PipesComponent {

  constructor(
    private decimalPipe: DecimalPipe
  ) {}
  // no caso de uso fora do html

  filme = {
    titulo: 'Harry Potter',
    estrelas: 4.445455664,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  };
  // new Date mostra data e hora atuais, a não ser que você de um valor

  // Exercicio
  compras = [{
    produto: 'Lâmpadas',
    valor: 299.29,
    quantidade: 2,
    peso: 0,
    data: new Date(2020, 1, 1, 15, 20),
  }, {
    produto: 'Farinha',
    valor: 450.29,
    peso: 29.33333,
    quantidade: 2,
    data: new Date(2020, 1, 10, 19, 30),
  }];

  // função formatando o peso
  getPesoFormatado(peso: number) {
    if (peso <= 0) {
      return 'Sem peso';
    }

    return peso;
  }

  // getPesoFormatado(peso: number) {
  //   if (peso <= 0) {
  //     return 'Sem peso'
  //   }

  //   return this.decimalPipe.transform(peso, '1.1-2') + ' Kg';
  // }

  // outra forma da funçao caso tiver importando pipe
  // DecimalPipe para numero

}
