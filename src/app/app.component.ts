import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlunosComponent, ProfessoresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartSchool';
}
