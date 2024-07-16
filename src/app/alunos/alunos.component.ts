import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [NgFor, TituloComponent, NgIf],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {
  public titulo = 'Alunos'
  public alunoSelecionado : string
  
  public alunos = [
    { id: 1, nome: "Ana", sobrenome: "Silva", telefone: "(11) 91234-5678" },
    { id: 2, nome: "Bruno", sobrenome: "Oliveira", telefone: "(21) 98765-4321" },
    { id: 3, nome: "Carlos", sobrenome: "Santos", telefone: "(31) 92345-6789" },
    { id: 4, nome: "Daniela", sobrenome: "Pereira", telefone: "(41) 93456-7890" },
    { id: 5, nome: "Eduardo", sobrenome: "Costa", telefone: "(51) 94567-8901" }
  ]

  alunoSelect(aluno : any) {
    this.alunoSelecionado = aluno.nome
  }

  alunoDeselect() {
    this.alunoSelecionado = ''
  }

  selectAndDeselect(aluno : any) {
    if (this.alunoSelecionado == aluno.nome) {
      this.alunoDeselect()
    } else {
      this.alunoSelect(aluno)
    }
  }

  // voltar() {
  //   this.alunoSelecionado = ''
  // }
  
  constructor() {

  }

  ngOnInit(): void {
    
  }
}
