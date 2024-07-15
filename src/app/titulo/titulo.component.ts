import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {

  @Input() titulo: string;

  constructor() {
    this.titulo = ''
  }

  ngOnInit() {
  }

}
