import { Component, OnInit } from '@angular/core';
import { FlistService } from '../flist.service';
import { HeaderComponent } from '../header/header.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flist',
  templateUrl: './flist.component.html',
  styleUrls: ['./flist.component.css']
})
export class FlistComponent implements OnInit {

  list : any;
  new_perso = {prenom : "", nom : ""};
  formError = [];
  admin = false;
  checkAdmin;

  constructor(private _flistService : FlistService) { }

  ngOnInit() {
    this.getAllFiches();
    this.isAdmin();
    this.isAdmin();
    this.checkAdmin = setInterval(() => {
      this.isAdmin();
    }, 1250);
  }

  ngOnDestroy() {
    if (this.checkAdmin) {
      clearInterval(this.checkAdmin);
    }
  }

  isAdmin() : void{
    if(!(this._flistService.getCookie("TOKEN") == null || this._flistService.getCookie("TOKEN") == "")){
      this._flistService.check_token(this._flistService.getCookie("TOKEN")).subscribe(res => {
        if(res.admin){
          if(res.admin == 1) this.admin = true;
          else this.admin = false;
        }else{
          this.admin = false;
        }
      });
    }else{
      this.admin = false;
    }
  }

  getAllFiches() : void{
    this._flistService.getAllFiches().subscribe(res => {
      this.list = res;
    });
  }

  addPerso() : void{
    this.formError = [];
    if(this._flistService.getCookie("TOKEN") == null || this._flistService.getCookie("TOKEN") == ""){
      this.formError.push("Vous devez être connecté pour effectuer cette action");
      return;
    } 
    this._flistService.check_token(this._flistService.getCookie("TOKEN")).subscribe(res => {

      if(res.error){
        this.formError.push(res.error);
      }

      if(this.new_perso.prenom.length < 1){
        this.formError.push("Vous devez renseigner le prénom du personnage");
      }
  
      for(let i = 0 ; i < this.list.length ; ++i){
        if(this.list[i].nom.toLowerCase().trim() == this.new_perso.nom.toLowerCase().trim() && this.list[i].prenom.toLowerCase().trim() == this.new_perso.prenom.toLowerCase().trim()){
          this.formError.push("Ce personnage existe déjà");
        } 
      }

      if(this.formError.length > 0) return;
  
      this._flistService.addPerso(this.new_perso.prenom, this.new_perso.nom, this._flistService.getCookie("TOKEN")).subscribe(res => {
        this.getAllFiches();
        this.new_perso.prenom = "";
        this.new_perso.nom = "";
      });
    })
  }

  deletePerso(id : number){
    if(!(this._flistService.getCookie("TOKEN") == null || this._flistService.getCookie("TOKEN") == "")){
      this._flistService.check_token(this._flistService.getCookie("TOKEN")).subscribe(res => {
        if(res.admin){
          if(res.admin == 1){
            console.log("Available : "+id);
            this._flistService.rmPerso(id, this._flistService.getCookie("TOKEN")).subscribe(res => {
              this.getAllFiches();
            });
          }
        }
      });
    }
  }

}
