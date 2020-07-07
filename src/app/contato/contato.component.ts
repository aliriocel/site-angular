import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formGroup : FormGroup;

  constructor(private formBuilder : FormBuilder) {

    this.formGroup = this.formBuilder.group({
      
      nome : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(120)]],
      reserva : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      email : ['',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(120)]],
      cpf : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      telefone : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      celular : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      mensagem : ['',[Validators.required,Validators.minLength(11),Validators.maxLength(1000)]]
      
    })

   }

  ngOnInit(): void {
  }

  // acionado quando clica em enviar
  onSubmit(){
    console.log("Olá Mundo!");
    console.log(this.formGroup.value);

  }

}
