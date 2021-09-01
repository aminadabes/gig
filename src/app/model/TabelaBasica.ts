import {Component} from '@angular/core';

export interface PeriodicElement {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: "Abrilina", email: 'Abrilina@gmail.com', telefone: "999999999", endereco: 'rua 12 casa 51'},
  {nome: "Fridudino", email: 'Fridudino@gmail.com', telefone: "999999999", endereco: 'rua 12 casa 52'},
  {nome: "Coisinha de tal", email: 'Coisinha@gmail.com', telefone: "999999999", endereco: 'rua 12 casa 53'},
  {nome: "Jesuino", email: 'Jesuino@gmail.com', telefone: "999999999", endereco: 'rua 12 casa 54'},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
    displayedColumns: string[] = ['nome', 'email', 'telefone', 'endereco'];
  dataSource = ELEMENT_DATA;
}