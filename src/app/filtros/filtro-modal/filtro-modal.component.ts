import { Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { FormsModule,} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [MatDialogModule,CommonModule,FormsModule,MatIconModule],
  templateUrl:'./filtro-modal.component.html',
  styleUrl: './filtro-modal.component.scss'
})
export class FiltroModalComponent {
  // Variable para controlar la visibilidad del mensaje
noResultados: boolean = false;

especieSeleccionada: string = ''
    // Definir propiedades para almacenar los filtros
    especie: string = '';
    edad: string | null = null;
    genero: string = '';
    ciudad: string = '';
    size: string = '';
    nombre: string = '';
    estadoAdopcion: string = '';
    contexto: string = ''; // Variable para almacenar el contexto

    // Definir arrays de opciones para los selects
    ciudades: string[] = ['Barcelona', 'Madrid', 'Valencia','Sevilla'];

    edades: string[] = ['Cachorro', 'Joven', 'Adulto'];
    estadosAdopcion: string[] = ['Disponible', 'Rechazado', 'Completo'];

    constructor(
      public dialogRef: MatDialogRef<FiltroModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      dialogRef.updateSize('100%', '100%');
      this.contexto = data.contexto; // Asigna el valor del contexto recibido
    }

    selectEspecie(especie: string): void {
      this.especie = especie;
       // Actualiza la propiedad especieSeleccionada
    }

  selectGenero(genero: string): void {
    this.genero = genero;
  }

  selectSize(size: string): void {
    this.size = size;
  }
  selectEstadoAdopcion(estado: string): void {
    this.estadoAdopcion = estado;
  }


  // Método para aplicar los filtros y cerrar el modal con los resultados
  aplicarFiltros(): void {
    console.log('Tipo de datos de this.data:', typeof this.data);
console.log('Contenido de this.data:', this.data);

    // Implementa la lógica para filtrar los datos según el contexto
    const resultadosFiltrados = this.data.animales.filter((animal: any) => {
      if (this.contexto === 'galeria') {
        // Filtrar según los filtros de la galería
        return (!this.especie || animal.especie.toLowerCase() === this.especie.toLowerCase()) &&
               (!this.edad || animal.edad.toLowerCase() === this.edad.toLowerCase()) &&
               (!this.genero || animal.genero.toLowerCase() === this.genero.toLowerCase()) &&
               (!this.ciudad || animal.ciudad.toLowerCase() === this.ciudad.toLowerCase()) &&
               (!this.size || animal.size.toLowerCase() === this.size.toLowerCase());
      } else if (this.contexto === 'adopcion') {
        // Filtrar según el filtro de adopción
        return !this.estadoAdopcion || animal.adoptionState.toLowerCase() === this.estadoAdopcion.toLowerCase();
      }
      return false; // siempre debo trar todas las sRUTAS POSIBLES Y DARLES VALOR
    });

    // Actualiza la visibilidad del mensaje no hay animal
    this.noResultados = resultadosFiltrados.length === 0;

    // Cierra el modal y devuelve los resultados filtrados si hay resultados
    if (resultadosFiltrados.length > 0) {
      this.dialogRef.close(resultadosFiltrados);
    } else {
      this.dialogRef.close(this.data.animales); // Cierra el modal sin aplicar ningún filtro y me da los datos base
    }
}

  borrarFiltros(): void {
    // Reiniciar todas las propiedades de filtro
    this.especie = '';
    this.edad = null;
    this.genero = '';
    this.ciudad = '';
    this.size = '';
    this.estadoAdopcion = '';


  }

  cerrarModal(): void {
    // Devuelve todos los animales base al cerrar el modal sin realizar ninguna acción
    this.dialogRef.close(this.data.animales);
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
