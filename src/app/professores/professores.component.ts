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
    { id: 1, nome: "Fernanda", sobrenome: "Gomes", telefone: "(11) 92345-6789" },
    { id: 2, nome: "Gustavo", sobrenome: "Lima", telefone: "(21) 93456-7890" },
    { id: 3, nome: "Helena", sobrenome: "Almeida", telefone: "(31) 94567-8901" },
    { id: 4, nome: "Igor", sobrenome: "Rodrigues", telefone: "(41) 95678-9012" },
    { id: 5, nome: "Juliana", sobrenome: "Ferreira", telefone: "(51) 96789-0123" }
  ]

  constructor() {}
  ngOnInit(): void {
    
  }
}
