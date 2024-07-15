import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AlunosComponent, ProfessoresComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartSchool';
}
