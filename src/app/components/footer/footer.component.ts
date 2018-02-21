import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  // Se crea una variable que obtiene el año actual
  anio:number =new Date().getFullYear();

}
