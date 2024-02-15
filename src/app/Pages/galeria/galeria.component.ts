import { BuscadorComponent } from '../../filtros/buscador/buscador.component';
import { ApiService } from './../../servicios/api.service';
import { Component } from '@angular/core';
import { FiltroModalComponent } from '../../filtros/filtro-modal/filtro-modal.component';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [BuscadorComponent,CommonModule,MatDialogModule,FiltroModalComponent,FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {
  animalesLista: any[] = [
    { nombre: 'Perro', genero: 'Macho', edad: 3, ciudad: 'Madrid', especie: 'Perro', tamaño: 'Mediano' },
    { nombre: 'Gato', genero: 'Hembra', edad: 2, ciudad: 'Barcelona', especie: 'Gato', tamaño: 'Pequeño' },
    { nombre: 'Pájaro', genero: 'Macho', edad: 1, ciudad: 'Valencia', especie: 'Pájaro', tamaño: 'Pequeño' }
  ];
//variable para guardar aniamles peticion 1 peticion
  animalesBase: any[]=[];
  //variable para guardar datos de usar el buscador
resultados:any[]=[]
//variable que registra el nmodel al escribir
textoBusqueda=''

  constructor(private apiService: ApiService, private dialog: MatDialog) {}
  ngOnInit(): void {

    this.apiService.getAnimales().subscribe((data:any) => {
      console.log("llegó a galeria datos:",data);
      this.animalesBase=data
      // Asi veo todos los animales al inicio
      this.resultados = this.animalesBase;
    });
  }

  buscar(texto:any) {
    this.resultados = this.animalesBase.filter(animal =>
      animal.nombre.toLowerCase().includes(texto.toLowerCase()));
      console.log(this.resultados);

      if (this.textoBusqueda==="") {
        this.animalesBase

      }else{this.resultados}


}

      //abri el modal
      abrirModal():void{
        const dialogRef=this.dialog.open(FiltroModalComponent,{
          width:'400px', //ancho del modal puedo poner mas como alto ...
        //método open para abrir el modal,
        //puedes pasar datos utilizando la opción data.Aquí puedes pasar los datos que necesites al modal
        data:this.resultados

      });

     // Puedes suscribirte al evento afterClosed para realizar acciones después de cerrar el modal si lo necesitas
     dialogRef.afterClosed().subscribe((resultados: any[]) => {
      console.log('Resultados del modal:', resultados);
      // Aquí puedes realizar acciones con los resultados recibidos, como actualizar la lista de animales
    });
  }
}

