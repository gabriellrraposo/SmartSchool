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
    {nome: 'Carlos', idade: 38}, 
    {nome: 'Maria',  idade: 41},
    {nome: 'José', idade: 58},
    {nome: 'Marcelo', idade: 55}, 
    {nome: 'Vera', idade: 60}
  ]

  constructor() {}
  ngOnInit(): void {
    
  }
}
