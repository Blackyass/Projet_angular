import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-candidater',
  templateUrl: './candidater.component.html',
  styleUrls: ['./candidater.component.css'],
})
export class CandidaterComponent implements OnInit{

  backend_path='http://localhost/ecole_uahb'
  constructor(private http:HttpClient) { }

  new_candidat:{nom:string, prenom:string, naissance:string, sexe:string, adresse:string, nationalite:string, email:string,numero:number, codef:string, niveau:string}={
    nom:" ",
    prenom:" ",
    naissance:"",
    sexe:" ",
    adresse:" ",
    nationalite:"",
    email:"",
    numero:0,
    codef:"",
    niveau:""
  }
  ngOnInit(): void {
    
  }

    envoyer(){
      this.http.post(this.backend_path+"/add.php",this.new_candidat)
  .subscribe((reponse:any)=>{
    this.new_candidat={nom:"", prenom:"", naissance:"", sexe:"", adresse:"", nationalite:"", email:"",numero:0, codef:"", niveau:""}
  console.log("Réponse du backend= ",reponse)
  })
  } 
}
