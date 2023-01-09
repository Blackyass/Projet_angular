import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { ListetudiantComponent } from './listetudiant/listetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListfiliereComponent } from './listfiliere/listfiliere.component';
import { AddfiliereComponent } from './addfiliere/addfiliere.component';
import { EditfiliereComponent } from './editfiliere/editfiliere.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { JuristeComponent } from './juriste/juriste.component';
import { EconomieComponent } from './economie/economie.component';
import { SticComponent } from './stic/stic.component';
import { MedecineComponent } from './medecine/medecine.component';
import { CandidaterComponent } from './candidater/candidater.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddetudiantComponent,
    ListetudiantComponent,
    EditetudiantComponent,
    NavbarComponent,
    ListfiliereComponent,
    AddfiliereComponent,
    EditfiliereComponent,
    AccueilComponent,
    FooterComponent,
    JuristeComponent,
    EconomieComponent,
    SticComponent,
    MedecineComponent,
    CandidaterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
