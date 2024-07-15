import { Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';

export const routes: Routes = [
    {path: 'professores', component: ProfessoresComponent},
    {path: 'alunos', component: AlunosComponent}
];
