import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  operando1: number = 0;
  operando2: number = 0;
  resultado: number = 0;

  suma() {
    this.resultado = this.operando1 + this.operando2;
  }

  resta() {
    this.resultado = this.operando1 - this.operando2;
  }

  multiplicion() {
    this.resultado = this.operando1 * this.operando2;
    
  }

  dividision() {
    if (this.operando2 !== 0) {
      this.resultado = this.operando1 / this.operando2;
    } else {
      console.log("No se puede dividir por 0");
    }
  }
}
