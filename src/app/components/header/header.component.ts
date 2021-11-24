
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
    console.log('Componente Header Creandose');
  }

  ngOnInit(): void {
    console.log('Componente Header ya creado');
  }
  /*Caracteres*/
  Nombre = "Brian";

  cambiarNombre (){
    this.Nombre += "Princess";
  }
  /*Numeros */
  contador = 0;

  suma(){
    this.contador += 1;
  }
  /*Arreglos*/
  arr = [1,2,3,4,5,6,7,8,9,10];
}
