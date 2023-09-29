import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Contatos } from './contatos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  API_URL = environment.API_URL;

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     Autorization: '..... TOKEN DE AUTENTICAÇÃO .....'
  //   })
  // }
  
  constructor(private http: HttpClient,) { }

  // listar contatos
  getContatos() {
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`);
  }
  
  // listar contato por id
  getContatoId(id: string) {
    return this.http.get<Contatos>(`${this.API_URL}/contatos/` + id);
  }

  // criar contato
  postContato(contato: Contatos) {
    return this.http.post<Contatos[]>(`${this.API_URL}/contatos`, contato);
    // usando a variavel httpOptions ao invez de passar os headers para todos endpoints
  }

  // atualizar dados do contato
  putContato(id: string, contato: Contatos) {
    return this.http.put<Contatos[]>(`${this.API_URL}/contatos/` + id, contato);
  }

  // deletar contato
  deleteContato(id: string) {
    return this.http.delete<Contatos>(`${this.API_URL}/contatos/` + id);
  }

}
