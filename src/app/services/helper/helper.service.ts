import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private notification: NzNotificationService, private http: HttpClient, private router: Router) { }

  store(param: any, link:string) {
    return this.http.post(environment.baseUrl + link, param);
  }

  index(link:string) {
    return this.http.get(environment.baseUrl + link);
  }
  index_params(link:string, payload:any) {
    return this.http.get(environment.baseUrl + link,{params:payload});
  }

  delete(link:string) {
    return this.http.delete(environment.baseUrl + link);
  }


  setNotification(type: any, title: any, msg:string=''): void {
    this.notification
      .create(
        type,
        title,
        msg
      );
  }


  // @ts-ignore
  labelTypeWork(value:string='') : String {
    switch (value) {
      case "full_time":
        return "Temps plein";
      case "part_time":
        return "Temps partiel";
      case "independent":
        return "Indépendant";
      case "freelance":
        return "Freelance";
      case "cdd":
        return "CDD";
      case "cdi":
        return "CDI";
      case "internship":
        return "Stage";
      case "study_contract":
        return "Contrat en alternance";
      case "seasonal":
        return "Saisonnier";
    }
  }

  // @ts-ignore
  labelTypeLocation(value:string='') : String {
    switch (value) {
      case "on_site":
        return "Sur site";
      case "afar":
        return "À distance";
      case "hybrid":
        return "Hybride";
    }
  }

  // @ts-ignore
  labelMaritalStatus(value:string='') : String {
    switch (value) {
      case "single":
        return "Célibataire";
      case "married":
        return "Marié(e)";
      case "widowed":
        return "Veuf / veuve";
      case "divorced":
        return "Divorcé(e)";

    }
  }


  // @ts-ignore
  user() : any {
    let users = localStorage.getItem("user");
   // @ts-ignore
    return JSON.parse(users);
  }

  // @ts-ignore
  labelProcessApplyStatus(value:string | null ='') : String {
    console.log("status",value);
    switch (value) {
      case null:
        return "Non pré-sélectionné";
      case "preselection":
        return "Pré-sélectionné";
      case "selection":
        return "Sélectionné";
      case "competency_interview":
        return "Entretien de compétence";
      case "reference_checking":
        return "Référence vérifiée";
      case "job_offer":
        return "Offre d'emploi";
      case "final_decision":
        return "Processus finalisé";

    }
  }
  // @ts-ignore
  positionProcessApplyStatus(value:string | null ='') : number {
    switch (value) {
      case null:
        return 0;
      case "preselection":
        return 1;
      case "selection":
        return 2;
      case "competency_interview":
        return 3;
      case "reference_checking":
        return 4;
      case "job_offer":
        return 5;
      case "final_decision":
        return 6;

    }
  }



}
