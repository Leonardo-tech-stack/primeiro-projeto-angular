import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  @Input() valor = 0;
  @Output() valorChange = new EventEmitter<number>();

  incrementar () {
    this.valor = this.valor + 1;
    this.valorChange.emit(this.valor);
  }

  decrementar() {
    this.valor = this.valor - 1;
    this.valorChange.emit(this.valor);
  }
}
