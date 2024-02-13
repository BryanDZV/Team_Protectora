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
    this.servicio
      .filtrarAnimalesPorEdad(this.edadSeleccionado)
      .subscribe((data: any) => {
        this.resultadosE = data.results;
        this.filtradoEdad.emit(this.resultadosE);
      });
  }
}
