import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre : string = "Capitán América";
  nombre2 : string = "caRLos mArTInez";
  arreglo : string[]=['Ironman','Hulk','Batman','Spiderman','Loki','Flash','Tor','Lobezno'];

  PI : number = Math.PI;
  porcentaje : number = 0.26985;
  salario : number = 1234.5;

  activar : boolean = true;

  fecha : Date = new Date();
  videoUrl : string = "https://www.youtube.com/embed/uJWTfuk374s";


  heroe = {
    nombre : 'Logan',
    clave : 'Lobezno',
    edad : 500,
    direccion : {
      calle : 'Primera',
      casa : 20
    }
  }
  
 

}
