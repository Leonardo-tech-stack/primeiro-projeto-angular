import { Component, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() texto: string = '';
  @Input() numero: number = 0;

  title = 'Seja bem-vindo';

  constructor(
    private authService: AuthService,
  ) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // o Hooks OnInit usado para chamar o conteudo logo quando inicia a aplicação, usado para chamar API por exemplo
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // o Hooks AfterViewInit chamado no inicio porem depois do OnInit
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    // executado apos a destruição de um componente
  }

  logout() {
    this.authService.logout()
  }

}
