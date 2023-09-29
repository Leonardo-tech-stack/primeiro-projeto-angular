import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AreaLogadaComponent } from "./area-logada.component";
import { ContatosModule } from "./contatos/contatos.module";


const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    // pathMatch usado para que redirecione caso seja somenta a rota especificada(path: '',)
}, {
    path: '',
    component: AreaLogadaComponent,

    // filhos da area logada
    children: [{
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    }, {
        path: 'extrato',
        loadChildren: () => import('./extrato/extrato.module').then(m => m.ExtratoModule),
    }, {
        path: 'contatos',
        loadChildren: () => import('./contatos/contatos.module').then(m => ContatosModule),
        // loadChildren usado para "carregamento lento", para não carregar tudo de uma vez
        // nesse caso foi usado porque agora o contato contem tambem o componente de detalhes de contato
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreaLogadaRoutingModule { }