import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FiltroModalComponent } from '../filtro-modal/filtro-modal.component';

@Component({
  selector: 'app-adopcion-modal',
  standalone: true,
  imports: [],
  templateUrl: './adopcion-modal.component.html',
  styleUrl: './adopcion-modal.component.scss'
})
export class AdopcionModalComponent {
//1 iyecto el Modal para que se pueda hacer uso de el
  constructor(public dialogRef: MatDialogRef<FiltroModalComponent>,

  ){}
// creo una funcion apra cerrar y uso el dialogRef.close que te da el modal
  cerrarVentana(){
    this.dialogRef.close()

  }

}
