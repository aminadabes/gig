import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { MembroService } from 'src/app/service/membro-service.service';

@Component({
  selector: 'app-form-dialog-membros',
  templateUrl: './form-dialog-membros.component.html',
  styleUrls: ['./form-dialog-membros.component.css']
})
export class FormDialogMembrosComponent implements OnInit {
  public formularioMembro!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormDialogMembrosComponent>,
    private formBuilder: FormBuilder,
    private rest: MembroService
  ) { }

  ngOnInit(): void {
    this.formularioMembro = this.formBuilder.group({

     
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    naturalidade: ['', [Validators.required]],
    data_nascimento: ['', [Validators.required]],
    estado_civil: ['', [Validators.required]],    
    nome_conjuge: ['', [Validators.required]],
    nome_pai: ['', [Validators.required]],
    nome_mae: ['', [Validators.required]],
    grau_escolaridade: ['', [Validators.required]],
    profissao: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    cidade: ['', [Validators.required]],
    cep: ['', [Validators.required]],
    batizado_aguas: ['', [Validators.required]],
    batizado_Espirito_Santo: ['', [Validators.required]],
      
    });
  }
 
  createMembro(){
    let newDate: moment.Moment = moment.utc(this.formularioMembro.value.data_nascimento).local();
    this.formularioMembro.value.data_nascimento = newDate.format("YYYY-MM-DD") ;
    console.log(this.formularioMembro.value);

    
        this.rest.postMembros(this.formularioMembro.value).subscribe(result => {});

    
    this.dialogRef.close(true);
    this.formularioMembro.reset();
    window.location.reload();
  }

  cancel(){
    this.dialogRef.close(true);
    this.formularioMembro.reset();
  }

}