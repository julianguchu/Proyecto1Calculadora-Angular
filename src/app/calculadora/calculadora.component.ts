import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {


numero1:any;
numero2:any;
resultado:any;
  constructor() { }

  ngOnInit(): void {
  }


  sumar(){

this.resultado=this.numero1 + this.numero2;


  }

}
