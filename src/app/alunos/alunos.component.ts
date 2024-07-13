import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos'
  
  public alunos = [
    {nome: 'Maria', idade: 18}, 
    {nome: 'João',  idade: 21},
    {nome: 'Ana', idade: 28},
    {nome: 'Pedro', idade: 15}, 
    {nome: 'Carla', idade: 30}
  ]
  
  constructor() {

  }

  ngOnInit(): void {
    
  }
}
