import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [NgFor, TituloComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores'

  professores = [
    { id: 1, nome: "Fernanda", sobrenome: "Gomes", disciplina: "Matemática" },
    { id: 2, nome: "Gustavo", sobrenome: "Lima", disciplina: "História" },
    { id: 3, nome: "Helena", sobrenome: "Almeida", disciplina: "Geografia" },
    { id: 4, nome: "Igor", sobrenome: "Rodrigues", disciplina: "Biologia" },
    { id: 5, nome: "Juliana", sobrenome: "Ferreira", disciplina: "Química" }
  ]

  constructor() {}
  ngOnInit(): void {
    
  }
}
