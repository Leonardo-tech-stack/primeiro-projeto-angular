import { Component } from '@angular/core';
import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas.constats';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {
  
  PREFIXO_IMAGEM_URL = 'https://raw.githubsercontent.com/vitorfgsantos/angular-memes-diretivas-master-images'
  memes = MEMES_AGRUPADOS_POR_CATEGORIA
}