import { Component, EventEmitter, Inject, Input, NgModule, Output, ComponentRef } from '@angular/core';
// import { CiudadComponent } from '../ciudad/ciudad.component';
// import { EspeciesComponent } from '../especies/especies.component';
// import { SexoComponent } from '../sexo/sexo.component';
// import { SizeComponent } from '../size/size.component';
// import { EdadComponent } from '../edad/edad.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [MatDialogModule,CommonModule,FormsModule],
  templateUrl:'./filtro-modal.component.html',
  styleUrl: './filtro-modal.component.scss'
})
export class FiltroModalComponent {
  resultados=""
   @Output() filtrosSeleccionados = new EventEmitter<any>();

   especie: string = '';
   edad: number | null = null;
   genero: string = '';
   ciudad: string = '';
   size: string = '';
   nombre: string = '';

   ciudades: string[] = ['Barcelona', 'Madrid', 'Valencia'];
   sizes: string[] = ['Pequeño', 'Mediano', 'Grande'];



  constructor(
    public dialogRef: MatDialogRef<FiltroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  aplicarFiltros(){}
  borrarFiltros(){}
  cerrarModal(){}


//logiva fd efiltrado


//devolver los resultados utilizando el método close
cerrarModalConResultado(resultados: any[]): void {
  this.resultados="hola"
  this.dialogRef.close(resultados);
}
}





















// constructor() {}

//   aplicarFiltros(): void {
//     const filtros = {
//       especie: this.especie,
//       edad: this.edad,
//       genero: this.genero,
//       ciudad: this.ciudad,
//       tamaño: this.size,
//       nombre: this.nombre
//     };
//     console.log('Filtros seleccionados:', filtros); // Para verificar en la consola
//     this.filtrosSeleccionados.emit(filtros);
//     this.dialogRef.close();
//   }


//   borrarFiltros(): void {
//     // Resetea todos los filtros
//     this.especie = '';
//     this.edad = null;
//     this.genero = '';
//     this.ciudad = '';
//     this.size = '';
//     this.nombre = '';
//   }

//   cerrarModal(): void {
//     this.dialogRef.close();
//   }
