import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { Professor } from '../models/Professor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [NgFor, TituloComponent, NgIf, NgClass, FormsModule, ReactiveFormsModule],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores'
  public profSelecionado : Professor | null

  professores = [
    { id: 1, nome: "Fernanda", sobrenome: "Gomes", disciplina: "Matemática" },
    { id: 2, nome: "Gustavo", sobrenome: "Lima", disciplina: "História" },
    { id: 3, nome: "Helena", sobrenome: "Almeida", disciplina: "Geografia" },
    { id: 4, nome: "Igor", sobrenome: "Rodrigues", disciplina: "Biologia" },
    { id: 5, nome: "Juliana", sobrenome: "Ferreira", disciplina: "Química" }
  ]

  profSelect(prof : Professor) {
    this.profSelecionado = prof
  }

  voltar() {
    this.profSelecionado = null
  }

  constructor() {}
  ngOnInit(): void {
    
  }
}
