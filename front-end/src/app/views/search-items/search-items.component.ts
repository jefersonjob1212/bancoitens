import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  constructor() { }

  enunciado: string;
  resposta: string;

  listaCurso: any[] = [
    { item_id: 1, item_text: 'Técnico em Programação de Jogos' },
    { item_id: 2, item_text: 'Técnico em Alimentos' },
    { item_id: 3, item_text: 'Técnico em Segurança da Informação' },
    { item_id: 4, item_text: 'Técnico em Analise de Sistema' },
    { item_id: 5, item_text: 'Técnico em Redes' }
  ];

  listaCursoSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  listaDisciplina: any[] = [
    { item_id: 1, item_text: "LÓGICA DE PROGRAMAÇÃO" },
    { item_id: 2, item_text: "MATEMÁTICA APLICADA" },
    { item_id: 3, item_text: "PROJETO DE BANCO DE DADOS" },
    { item_id: 4, item_text: "RELAÇÕES HUMANAS NO TRABALHO" }
  ];

  listaDisciplinaSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',    
    selectAllText: 'Todos',
    unSelectAllText: 'Nenhum',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  listaMatriz: any[] = [
    { item_id: 1, item_text: "C1" },
    { item_id: 2, item_text: "C2" },
    { item_id: 3, item_text: "C3" },
    { item_id: 4, item_text: "C4" },
    { item_id: 5, item_text: "C5" },
    { item_id: 6, item_text: "C6" },
    { item_id: 7, item_text: "C7" },
    { item_id: 8, item_text: "C8" },
    { item_id: 9, item_text: "C9" }
  ];

  listaMatrizSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',    
    selectAllText: 'Todos',
    unSelectAllText: 'Nenhum',
    itemsShowLimit: 9,
    allowSearchFilter: true
  };

  ngOnInit() {
  }

}
