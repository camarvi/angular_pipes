import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean = false): string {
    
    return(activar) ? '*'.repeat(value.length) : value;

   // let cadena: string = "";
   // let asterisco : string = "*";
   //
   // if (activar) {
   //  for (let i=0; i<value.length; i++ ) {
   //   cadena = cadena + asterisco;
   //  } 
   // 
   //  } else {
   //    cadena = value;
   //  }
   //  return cadena; 
    }
   
  }
  
