import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora-divisas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora-divisas.component.html',
  styleUrl: './calculadora-divisas.component.css'
})
export class CalculadoraDivisasComponent {
  cambioEurosLibras: number = 0.85;
  cambioLibrasEuros: number = 1.17;
  cambioEurosDolares: number = 1.07;
  cambioDolaresEuros: number = 0.94;
  cambioLibrasDolares: number = 1.25;
  cambioDolaresLibras: number = 0.80;
  euros: number = 0;
  libras: number = 0;
  dolares: number = 0;
  cantidadFinal: number = 0;

  eurosLibras(): void{

    this.cantidadFinal = this.euros *  this.cambioEurosLibras;
  }

  librasEuros():void{
    this.cantidadFinal = this.libras * this.cambioLibrasEuros;
  }

  eurosDolares():void{
    this.cantidadFinal = this.euros * this.cambioEurosDolares;
  }

  dolaresEuros():void{
    this.cantidadFinal = this.dolares * this.cambioDolaresEuros;
  }

  librasDolares():void{
    this.cantidadFinal = this.libras * this.cambioLibrasDolares;
  }

  dolaresLibras():void{
    this.cantidadFinal = this.dolares * this.cambioDolaresLibras;
  }


}
