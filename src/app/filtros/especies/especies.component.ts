import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-especies',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './especies.component.html',
  styleUrl: './especies.component.scss',
})
export class EspeciesComponent {

  public especieSeleccionada:any;
  public resultados: any[] = []; // Declarar resultados como un array de tipo any[] y asignarle un array vacío inicialmente
@Output() filtradoEspecies=new EventEmitter<any[]>();
constructor(private servicio: ApiService) {}

filtrarPorEspecie() {
  this.servicio
    .filtrarAnimalesPorEspecie(this.especieSeleccionada)
    .subscribe((data:any) => { // Especifica el tipo de datos esperado en el argumento de la función de suscripción
      console.log("soy especie", data);
      this.resultados = data.results;
      this.filtradoEspecies.emit(this.resultados);
    });
}
}
