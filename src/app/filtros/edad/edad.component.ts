import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edad.component.html',
  styleUrl: './edad.component.scss'
})
export class EdadComponent {
  public edadSeleccionado: any;
  public resultadosE: any[] = [];
  @Output() filtradoEdad = new EventEmitter<any[]>();

  constructor(private servicio: ApiService) {}

  filtrarPorEdad() {
    // Verifica que la edad seleccionada esté dentro del rango antes de filtrar
    if (this.edadSeleccionado && this.edadSeleccionado >= 1 && this.edadSeleccionado <= 30) {
      this.servicio
        .filtrarAnimalesPorEdad(this.edadSeleccionado.toString()) // Convierte a string
        .subscribe((data: any) => {
          this.resultadosE = data;
          this.filtradoEdad.emit(this.resultadosE);
        });
    } else {
      console.error('La edad seleccionada no es válida. Debe ser un número entre 1 y 30.');
    }
  }
}
