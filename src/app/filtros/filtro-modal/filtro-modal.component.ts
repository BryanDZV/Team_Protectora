import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CiudadComponent } from '../ciudad/ciudad.component';
import { EspeciesComponent } from '../especies/especies.component';
import { SexoComponent } from '../sexo/sexo.component';
import { SizeComponent } from '../size/size.component';
import { EdadComponent } from '../edad/edad.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [CiudadComponent,EspeciesComponent,SexoComponent,SizeComponent,EdadComponent,MatDialogModule,CommonModule,FormsModule],
  templateUrl: './filtro-modal.component.html',
  styleUrl: './filtro-modal.component.scss'
})
export class FiltroModalComponent {
  @Output() filtrosSeleccionados = new EventEmitter<any>();

  especie: string = '';
  edad: number | null = null;
  genero: string = '';
  ciudad: string = '';
  size: string = '';
  nombre: string = '';

  ciudades: string[] = ['Barcelona', 'Madrid', 'Valencia'];
  sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];

  constructor() {}

  aplicarFiltros(): void {
    const filtros = {
      especie: this.especie,
      edad: this.edad,
      genero: this.genero,
      ciudad: this.ciudad,
      tamaño: this.size,
      nombre: this.nombre
    };
    this.filtrosSeleccionados.emit(filtros);
  }
}
