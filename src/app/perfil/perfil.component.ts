import { Component, OnInit } from '@angular/core';
import { TituloComponent } from '../titulo/titulo.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [TituloComponent],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public titulo = 'Perfil'

  constructor() { }

  ngOnInit() {
  }

}
