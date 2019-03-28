import { Injectable, HostListener } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlistService {

  //private _url = 'http://localhost/jdr/login.php';

  constructor(private http: HttpClient) { }

  getAllFiches() : Observable<any>{
    let url = 'http://localhost/jdr/list_fiches.php';
    return this.http.get<any>(url);
  }

  getAllProfils() : Observable<any>{
    let url = 'http://localhost/jdr/list_profils.php';
    return this.http.get<any>(url);
  }

  getEditableFiches() : Observable<any>{
    let url = 'http://localhost/jdr/editable_fiches.php?token='+this.getCookie("TOKEN");
    return this.http.get<any>(url);
  }

  getFiche(id : number) : Observable<any>{
    let url = 'http://localhost/jdr/fiche.php?id='+id;
    return this.http.get<any>(url);
  }

  addPerso(prenom : string, nom : string, createur: string) : Observable<any>{
    let url = 'http://localhost/jdr/add_perso.php?p='+prenom+'&n='+nom+'&c='+createur;
    return this.http.get<any>(url);
  }

  rmPerso(id : number, token : string) : Observable<any>{
    let url = 'http://localhost/jdr/remove_perso.php?id='+id+'&token='+token;
    return this.http.get<any>(url);
  }

  updateFiche(fiche: object) : Observable<any>{
    let url = 'http://localhost/jdr/update_fiche.php';
    return this.http.put<any>(url, fiche);
  }

  login(login: string, pw: string) : Observable<any>{
    let url = 'http://localhost/jdr/login.php?login='+login+'&pw='+pw;
    return this.http.get<any>(url);
  }

  subscribe(login: string, pw: string) : Observable<any>{
    let url = 'http://localhost/jdr/subscribe.php?login='+login+'&pw='+pw;
    return this.http.get<any>(url);
  }

  check_token(token: string) : Observable<any>{
    let url = 'http://localhost/jdr/check_token.php?token='+token;
    return this.http.get<any>(url);
  }

  check_access(token: string, id: number) : Observable<any>{
    let url = 'http://localhost/jdr/check_access.php?token='+token+'&id='+id;
    return this.http.get<any>(url);
  }

  setCookie(cname, cvalue, exdays): void {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  delete_cookie( name ): void {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  getCookie(cname): string {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}
