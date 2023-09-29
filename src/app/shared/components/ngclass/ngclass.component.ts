import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  // ViewEncapsulation serve para que os estilos não "vazem" para os outros componentes
  // ShadowDom para que os estilos sejam aplicados apenas nos componentes descendentes diretos
  // None, para nao aplicar o encapsulamento
  // Emulated(padrão), é o mesmo que não usar encapsulation, o Angular seleciona quais estilos serão ou não encapsulados(acho)
})
export class NgclassComponent {

  deveSerVerde = false;

  tornarVerde() {
    this.deveSerVerde = true;
  }
}
