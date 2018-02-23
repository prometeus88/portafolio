import { Component } from '@angular/core';
import {InformacionService} from "../../services/informacion.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})

export class FooterComponent {
  // Se crea una variable que obtiene el año actual
  anio:number =new Date().getFullYear();
  constructor(public _is:InformacionService){}
}
