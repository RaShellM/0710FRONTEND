import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RecettesComponent } from './recettes/recettes.component';
import { DetailComponent } from './detail/detail.component';
import { MatListModule} from '@angular/material/list';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppNavigationComponent,
    QuestionnaireComponent,
    RecettesComponent,
    DetailComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule, //toujours en premier
    BrowserAnimationsModule,
    HttpClientModule, // pour effectuer les requêtes client sur le backend
    AppRoutingModule, 
    FormsModule,
    MatInputModule,
    MatToolbarModule, 
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule, 
    MatListModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
