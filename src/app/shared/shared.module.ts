import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ExercicioDataBindingComponent } from './components/exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    ExercicioDiretivasComponent,
    NgclassComponent,
    PipesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    ExercicioDiretivasComponent,
    NgclassComponent,
    PipesComponent,
  ],
  // providers vindo do interceptor
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    // multi para aceitar mais de um interceptador
  }]
})
export class SharedModule { }
