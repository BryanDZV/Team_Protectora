import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-especies',
  standalone: true,
  imports: [FormsModule,MatIconModule,MatSelectModule,MatOptionModule,CommonModule],
  templateUrl: './especies.component.html',
  styleUrl: './especies.component.scss',
})
export class EspeciesComponent {

  public especieSeleccionada:any;
  especies = [
    { nombre: 'Pez', icon: 'pets' },
    { nombre: 'Gato', icon: 'cat' },
    { nombre: 'Perro', icon: 'dog' },
    { nombre: 'Tortuga', icon: 'turtle' },
    { nombre: 'Conejo', icon: 'rabbit' },
    { nombre: 'Pájaro', icon: 'bird' },
  ];


  @Output() filtradoEspecies = new EventEmitter<any[]>();

  constructor(private servicio: ApiService) {}

  toggleEspecie(especie: string) {
    const index = this.especieSeleccionada.indexOf(especie);
    if (index === -1) {
      this.especieSeleccionada.push(especie); // Agregar la especie si no está seleccionada
    } else {
      this.especieSeleccionada.splice(index, 1); // Eliminar la especie si ya está seleccionada
    }
    // Aquí puedes agregar lógica adicional según tus requerimientos, como filtrar los resultados según las especies seleccionadas
  }

  filtrarPorEspecie() {
    // Filtrar los resultados según las especies seleccionadas y emitir el evento
    this.servicio.filtrarAnimalesPorEspecie(this.especieSeleccionada)
      .subscribe((data: any) => {
        console.log("soy especie", data);
        this.filtradoEspecies.emit(data);
      });
  }
}
