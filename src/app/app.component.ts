import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjerciciosRepasoComponent } from './ejerciciosTipoDato/ejercicios-repaso.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraDivisasComponent } from './calculadora-divisas/calculadora-divisas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjerciciosRepasoComponent, CalculadoraComponent, CalculadoraDivisasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejerciciosRepasoAngular01';
}
