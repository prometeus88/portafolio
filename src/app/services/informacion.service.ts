import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];

  constructor(public http:Http) {
    this.info_carga();
    this.info_sobre_nosotros();
  }
  public info_carga(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe(data =>{
          // console.log(data.json());
          this.cargada = true;
          this.info = data.json();
      });
  }

  public info_sobre_nosotros(){
    this.http.get("https://paginaweb-6660c.firebaseio.com/equipo.json")
      .subscribe(data =>{
          console.log(data.json());
          this.cargada_sobre_nosotros = true;
          this.equipo = data.json();
      });
  }
}
