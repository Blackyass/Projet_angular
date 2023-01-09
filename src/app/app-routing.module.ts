import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddfiliereComponent } from './addfiliere/addfiliere.component';
import { CandidaterComponent } from './candidater/candidater.component';
import { EconomieComponent } from './economie/economie.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import { JuristeComponent } from './juriste/juriste.component';
import { ListfiliereComponent } from './listfiliere/listfiliere.component';
import { LoginComponent } from './login/login.component';
import { MedecineComponent } from './medecine/medecine.component';
import { SticComponent } from './stic/stic.component';

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: "accueil"},
  {path: 'accueil', component:AccueilComponent},
  {path: 'listfiliere', component:ListfiliereComponent},
  {path: 'juriste', component:JuristeComponent},
  {path: 'economie', component:EconomieComponent},
  {path: 'stic', component:SticComponent},
  {path: 'medecine', component:MedecineComponent},
  {path: 'candidater', component:CandidaterComponent},
  {path: 'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
