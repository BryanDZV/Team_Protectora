
import { BuscadorComponent } from '../../filtros/buscador/buscador.component';
import { ApiService } from './../../servicios/api.service';
import { Component } from '@angular/core';
import { FiltroModalComponent } from '../../filtros/filtro-modal/filtro-modal.component';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';





@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [BuscadorComponent,CommonModule,MatDialogModule,],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  //los datos que reciba los voy a guardar aqui array
  public animalesLista:any[]=[]
  //  public filteredAnimals: any[] = [];
  public filteredResults: any[] = [];
  public dialogRef!: MatDialogRef<FiltroModalComponent>;

// llammo mi servicio
  constructor(private servicio:ApiService,public dialog: MatDialog){}


  ngOnInit(): void {
    this.servicio.getAnimales().subscribe(
      (data: any) => {
        this.animalesLista = data;
        console.log('Datos recibidos:', this.animalesLista); // Aquí se muestra la data recibida
        this.filteredResults = [...this.animalesLista]; // Inicializamos los resultados filtrados
        this.openFilter();
      },
      (error: any) => {
        console.error('Error al obtener animales:', error);
      }
    );
  }

  openFilter() {
    this.dialogRef = this.dialog.open(FiltroModalComponent, {
      width: '100%',
      height: '100%',
      data: this.filteredResults
    });

    this.dialogRef.componentInstance.filtersApplied.subscribe((filtersAplicados: any[]) => {
      if (filtersAplicados && filtersAplicados.length > 0) {
        this.aplicarFiltros(filtersAplicados);
      } else {
        this.filteredResults = [...this.animalesLista]; // Restauramos la lista original si no hay filtros aplicados
      }
    });
  }

  aplicarFiltros(filtersAplicados: any[]) {
    // Aplicar los filtros y actualizar los resultados filtrados
    // Aquí deberías implementar la lógica para aplicar los filtros según tus requerimientos
    this.filteredResults =filtersAplicados
  }

  showFilteredBuscador(filteredBuscador: any[]) {
    this.filteredResults = filteredBuscador;
  }
}
