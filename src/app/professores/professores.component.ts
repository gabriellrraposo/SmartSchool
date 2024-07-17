import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
  public profForm : FormGroup

  constructor(private fb: FormBuilder) {
    this.criarForm()
  }


  ngOnInit(): void {
    
  }

  criarForm() {
    this.profForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      disciplina: ['', Validators.required],
    })
  }

  professores = [
    { id: 1, nome: "Fernanda", sobrenome: "Gomes", disciplina: "Matemática" },
    { id: 2, nome: "Gustavo", sobrenome: "Lima", disciplina: "História" },
    { id: 3, nome: "Helena", sobrenome: "Almeida", disciplina: "Geografia" },
    { id: 4, nome: "Igor", sobrenome: "Rodrigues", disciplina: "Biologia" },
    { id: 5, nome: "Juliana", sobrenome: "Ferreira", disciplina: "Química" }
  ]

  profSelect(prof : Professor) {
    this.profSelecionado = prof
    this.profForm.patchValue(prof)
  }

  profSubmit() {
    console.log(this.profForm.value)
  }

  voltar() {
    this.profSelecionado = null
  }


}
