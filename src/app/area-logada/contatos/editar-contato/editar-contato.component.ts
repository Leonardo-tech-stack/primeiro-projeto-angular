import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContatosService } from '../contatos.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatos } from '../contatos.interfaces';
import { finalize, take } from 'rxjs';

@Component({
  selector: 'app-editar-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {

  idContato!: string | null; 
  contatoForm!: FormGroup;
  // FormGroup usado para os formularios reativos

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inicializarFormulario();

    this.idContato = this.route.snapshot.paramMap.get('id');

    if (this.idContato !== null) {
        // this.contato = idContato;

      // chama o loading apenas se for editar o contato, se for criar nao
      if (this.estaEditando()) {
        this.carregarContato();
      }
    } else {
      console.error('ID de contato está nulo.');
    }

    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl(),
    // });
  }

  estaEditando = () => Boolean(this.idContato);

  inicializarFormulario() {
    // forma mais simples para caso de muitos dados(nome, endereço etc)
    this.contatoForm = this.formBuilder.group({
      nome: ['Apagar depois', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      cpf: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(3)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
      banco: ['', Validators.required],
    })
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;
  
    const idContato = this.route.snapshot.paramMap.get('id');
  
    if (idContato !== null) {
      this.contatosService.getContatoId(idContato)
        .pipe(
          take(1),
          finalize(() => this.estaCarregando = false)
        )
        .subscribe(
          response => this.onSucessoCarregarContato(response),
          error => this.onErroCarregarContato(error),
        );
    } else {
      console.error('ID de contato está nulo.');
    }
  }

  onErroCarregarContato(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  onSucessoCarregarContato(response: Contatos) {
    this.contatoForm.patchValue(response)
    // this.contatoForm.patchValue({
      // patchValue usado para trocar o value do(s) input(s) listado abaixo, ou simplesmente passar response como parametro que ja pega todos inputs
      // nome: response.nome,
      // ag: response.ag,
      // cpf: response.cpf
    // })
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.controls[nomeControle]) {
      return false;
    }

    return this.contatoForm.controls[nomeControle].invalid && this.contatoForm.controls[nomeControle].touched;
  }

  // caso tenha um grupo de tipagens/dados
  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      if (control instanceof FormGroup) {
        control.markAsTouched();
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    })
  }

  // caso não tenha
  // validateAllFormFields() {
  //   Object.keys(this.contatoForm.controls).forEach(field => {
  //     const control = this.contatoForm.get(field);
  //     control?.markAsTouched();
  //   })
  // }

  onSubmit() {
    console.log(this.contatoForm)
    if (this.contatoForm.invalid) {
      // this.contatoForm.controls['nome'].markAsTouched();
      // this.contatoForm.controls['email'].markAsTouched();
      // this.contatoForm.controls['banco'].markAsTouched();

      // forma de validar todos de uma vez
      this.validateAllFormFields(this.contatoForm);
      return;
    }

    if(this.estaEditando()) {
      this.salvarContato();
      return;
    }

    this.criarContato();
    console.log(this.contatoForm);
  }

  salvarContato() {
    if (this.idContato !== null) {
      this.contatosService.putContato(this.idContato, this.contatoForm.value)
        .subscribe(
          response => this.onSucessoSalvarContato(),
          error => this.onErro(),
        );
    } else {
      console.error('ID de contato está nulo.');
    }
  }

  onSucessoSalvarContato() {
    this.toastr.success('Sucesso', 'Contato editado com sucesso!');
    this.router.navigate(['contatos']);
  }

  criarContato() {
    this.contatosService.postContato(this.contatoForm.value)
    .subscribe(
      response => this.onSucessoCriarContato(),
      error => this.onErro(),
    )
  }

  onSucessoCriarContato() {
    this.toastr.success('Sucesso', 'Contato criado com sucesso!');
    this.router.navigate(['contatos']);
  }

  onErro() {
    this.toastr.error('Erro', 'Deu erro')
  }

}
