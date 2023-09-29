import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './area-logada/home/home.component';
import { ExtratoComponent } from './area-logada/extrato/extrato.component';
import { ContatosComponent } from './area-logada/contatos/listar-contatos/contatos.component';
import { DetalhesContatoComponent } from './area-logada/contatos/detalhes-contato/detalhes-contato.component';
// componentes removidos e importados em seus próprios module

import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';
// importando a guard (obs abaixo no canActivate)

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
  canActivate: [EstaLogadoGuard],
}, {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  canActivate: [NaoEstaLogadoGuard],
  // para não acessar login caso estiver logado
}, {
  path: '**',
  component: NaoEncontradoComponent,
  // esse path serve para caso tente acessar uma rota inexistente
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
