import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pensamento = {
    id : '1',
    conteudo : 'Aprendendo angular',
    auditoria :  'Dev',
    modelo : 'Vazio'
  }

  adicionarPensamento(){
   alert("Pensamento foi criado!");
  }
  cancelarPensamento(){
   alert("Pensamento foi cancelado!");
  }

}
