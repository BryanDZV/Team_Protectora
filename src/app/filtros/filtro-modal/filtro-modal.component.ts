import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CiudadComponent } from '../ciudad/ciudad.component';
import { EspeciesComponent } from '../especies/especies.component';
import { SexoComponent } from '../sexo/sexo.component';
import { SizeComponent } from '../size/size.component';
import { EdadComponent } from '../edad/edad.component';
import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [CiudadComponent,EspeciesComponent,SexoComponent,SizeComponent,EdadComponent,MatDialogModule],
  templateUrl: './filtro-modal.component.html',
  styleUrl: './filtro-modal.component.scss'
})
export class FiltroModalComponent {
  //debo apsar datos alfilteredResult inciales
  public filteredResults: any[] = [];
  @Input () animalesLista:any
  @Output() filtersApplied:any= new EventEmitter<any[]>();
 public filtersTotales:any = [];
 constructor(private dialogRef: MatDialogRef<FiltroModalComponent>) {}

  showFilteredEspecie(filtradoEspecie:any[]) {
    this.filteredResults = [...this.filteredResults,filtradoEspecie];
    console.log("soy datos en filtro especie",this.filteredResults);

  }
  showFilteredSexo(filteredSexo: any[]) {
    this.filteredResults = [...this.filteredResults, ...filteredSexo];
    console.log("soy datos en filtro modal:",this.filteredResults);

  }
  showFilteredSize(filteredSize: any[]) {
    this.filteredResults = [...this.filteredResults, ...filteredSize];
  }
  showFilteredEdad(filteredEdad: any[]) {
    this.filteredResults = [...this.filteredResults, ...filteredEdad];
  }
  showFilteredCiudad(filteredCiudad: any[]) {
    this.filteredResults = [...this.filteredResults, ...filteredCiudad];
  }

  aplicarFiltros(): void {
    // Emitir los filtros aplicados
    this.filtersApplied.emit(this.filteredResults);


  }
  borrarFiltros(): void {
    // Limpiar los filtros y emitir un evento para restablecer los resultados originales
    this.filteredResults = [];
    this.filtersApplied.emit([]);
    // Cerrar el diálogo

  }
  cerrarFiltro(): void {
    this.dialogRef.close();
  }
}
