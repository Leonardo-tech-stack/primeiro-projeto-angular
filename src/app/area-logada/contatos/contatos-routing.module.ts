import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosComponent } from './listar-contatos/contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { EditarContatoComponent } from './editar-contato/editar-contato.component';

const routes: Routes = [{
  path: '',
  // adicionar no path caso haja alguma coisa apos "/contatos", "/listar" por exemplo,
  // no caso não tem, fica vazio
  component: ContatosComponent,
}, {
  path: 'novo',
  component: EditarContatoComponent,
}, {
  path:':id',
  component: DetalhesContatoComponent,
}, {
  path:':id/editar',
  component: EditarContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
