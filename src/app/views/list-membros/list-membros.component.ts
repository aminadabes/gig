import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Membro } from 'src/app/model/Membro';
import { MembroService } from 'src/app/service/membro-service.service';

@Component({
  selector: 'app-list-membros',
  templateUrl: './list-membros.component.html',
  styleUrls: ['./list-membros.component.css']
})
export class ListMembrosComponent implements OnInit {

  listaMembros!: Membro[];
  displayedColumns: string[] = [
    'id', 'nome', 'telefone', 'naturalidade',
    'estado_civil', 'nome_conjuge', 'nome_pai', 'nome_mae',
    'grau_escolaridade', 'profissao', 'endereco', 'cidade',
    'cep', 'batizado_aguas', 'funcaoMinisterial', 'batizado_Espirito_Santo',
    'data_nascimento'
  ];

  constructor(
    private membroService: MembroService    
  ) { }

  ngOnInit(): void {
    this.getMembros();
  }
  getMembros() {
    this.membroService.getMembros()
    .subscribe(
      (membro: any[]) => {
        console.log(membro);
      this.listaMembros = membro;
      console.log(this.membroService.getMembros());
      
    });
  }

}
