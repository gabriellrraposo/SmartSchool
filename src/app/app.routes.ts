import { Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'professores', component: ProfessoresComponent},
    {path: 'alunos', component: AlunosComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'dashboard', component: DashboardComponent}
];
