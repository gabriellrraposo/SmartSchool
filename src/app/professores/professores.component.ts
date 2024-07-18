import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';
import { Professor } from '../models/Professor';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { ModalComponent } from '../modal/modal/modal.component';
import { AlunosComponent } from '../alunos/alunos.component';


@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [NgFor, TituloComponent, NgIf, NgClass, FormsModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css',
  providers: [BsModalService]
})
export class ProfessoresComponent implements OnInit {
  public titulo = 'Professores'
  public profSelecionado : Professor | null
  public profForm : FormGroup
  public modalRef: BsModalRef

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template)
  }
}
