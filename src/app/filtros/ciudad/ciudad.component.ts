import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [FormsModule,MatIconModule,MatSelectModule,MatOptionModule],
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
        this.resultadosC= data;
        console.log("soy datos filtrados en filtroCiudad",this.resultadosC);

        this.filtradoCiudad.emit(this.resultadosC);
      });
  }
}
