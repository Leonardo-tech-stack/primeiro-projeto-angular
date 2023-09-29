import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth/auth.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// importar tambem no module (geralmente importa no module só NgbModalModule para não pesar aplicação)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuario: any;
  
  constructor(
    private authService: AuthService,
    private modalService: NgbModal,
    // modal do bootstrap
  ) { }

  ngOnInit() {
    this.usuario = this.authService.getUsuario();
  }

  abrirModal(content: any) {
    this.modalService.open(content, { size: 'lg' });
    console.log('Modal aberto');
  }
}
