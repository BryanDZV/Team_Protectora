import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrl: './ciudad.component.scss'
})
export class CiudadComponent {
  public ciudadSeleccionado: any;
  public resultadosC: any[] = [];
  @Output() filtradoCiudad = new EventEmitter<any[]>();

  constructor(private servicio: ApiService) {}

  filtrarPorCiudad() {
    this.servicio
      .filtrarAnimalesPorCiudad(this.ciudadSeleccionado)
      .subscribe((data: any) => {
        this.resultadosC= data.results;
        this.filtradoCiudad.emit(this.resultadosC);
      });
  }
}
