import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import http para requisiçoes de API

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importações para localidade, por exemplo, traduzir a data do new Date que foi usado no Pipes
// Obs.: adicionar providers, para dizer ao Angular para usar
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
// import { ExtratoComponent } from './extrato/extrato.component';
// import { ContatosComponent } from './contatos/contatos.component';
// import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
// contatos e extrato foram adicionados em seus próprios modules

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePt, 'pt');
// parte do arquivo de localidade

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // import http para requisiçoes de API

    SharedModule,

    [BrowserAnimationsModule],
    ToastrModule.forRoot(),
    // animações toastr angular
  ],
  providers: [{
    provide:  LOCALE_ID,
    useValue: 'pt'
  }],
  // LOCALE_ID precisa ser importado
  bootstrap: [AppComponent]
})
export class AppModule { }
