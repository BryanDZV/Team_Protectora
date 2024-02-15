import { BuscadorComponent } from '../../filtros/buscador/buscador.component';
import { ApiService } from './../../servicios/api.service';
import { Component } from '@angular/core';
import { FiltroModalComponent } from '../../filtros/filtro-modal/filtro-modal.component';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule,} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [BuscadorComponent,CommonModule,MatDialogModule,FiltroModalComponent,FormsModule, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  public animalesBase: any[] = [];
  public resultados: any[] = [];
  public textoBusqueda = '';

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.apiService.getAnimales().subscribe((data: any) => {
      this.animalesBase = data;
      this.resultados = this.animalesBase; // Inicialmente muestra todos los animales
    });
  }

  buscar(texto: string): any {
    this.resultados = this.animalesBase.filter(animal =>
      animal.nombre.toLowerCase().includes(texto.toLowerCase())
    );
  }

  abrirModal(): void {
    const dialogRef = this.dialog.open(FiltroModalComponent, {
      width: '400px',
      data:{animales: this.animalesBase, contexto: 'galeria'} // Pasar todos los animales para aplicar filtros sobre ellos
    });


// Actualizar la lista de resultados con los filtrados
    dialogRef.afterClosed().subscribe((resultados: any[]) => {
      if (resultados && resultados.length > 0) {
        this.resultados = resultados;
      }
    });
  }





}

