import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [NgFor, TituloComponent, NgIf],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores'
  public profSelecionado : string

  professores = [
    { id: 1, nome: "Fernanda", sobrenome: "Gomes", disciplina: "Matemática" },
    { id: 2, nome: "Gustavo", sobrenome: "Lima", disciplina: "História" },
    { id: 3, nome: "Helena", sobrenome: "Almeida", disciplina: "Geografia" },
    { id: 4, nome: "Igor", sobrenome: "Rodrigues", disciplina: "Biologia" },
    { id: 5, nome: "Juliana", sobrenome: "Ferreira", disciplina: "Química" }
  ]

  profSelect(prof : any) {
    this.profSelecionado = prof.nome
  }

  voltar() {
    this.profSelecionado = ''
  }

  constructor() {}
  ngOnInit(): void {
    
  }
}
