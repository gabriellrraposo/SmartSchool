import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    AlunosComponent, 
    ProfessoresComponent, 
    PerfilComponent, 
    DashboardComponent, 
    TituloComponent, 
    NavComponent, 
    RouterLink,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartSchool';
}
