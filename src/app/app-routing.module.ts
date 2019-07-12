import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { RecettesComponent } from './recettes/recettes.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },

  {
    path: 'home',
    component: DashboardComponent,
  },

  {
    path: 'recettes',
    component: RecettesComponent
  }, 
  {
    path: 'addsmoothie',
    component: QuestionnaireComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  { 
    path: 'people',
    component: ProfileEditorComponent
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
