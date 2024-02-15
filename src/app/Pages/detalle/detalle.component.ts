import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import { PopUpComponent } from '../../pop-up/pop-up.component';


@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MatTabsModule, MatIconModule, PopUpComponent],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {
  id!:any;
  constructor(private servicio: ApiService, private rutaActivada: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe(params => {
     this.id = Number(params.get("id"))
     console.log(Number(params.get("id")));
    })

    this.servicio.getAnimalbyId(this.id).subscribe((data:any)=>{
      console.log(data);
    }
    )
  }

  handleShareClick() {
    if (navigator.share) {
      navigator.share({
        title: 'Título de la información compartida',
        text: 'Texto descriptivo de la información compartida',
        url: 'URL de la información compartida',
      })
        .then(() => console.log('Información compartida con éxito'))
        .catch((error) => console.error('Error al intentar compartir:', error));
    } else {
      console.log('La API de Web Share no está disponible en este navegador.');
    }
  }

  handleLikeClick() {
    // Lógica para manejar el clic en el botón "Me gusta"
    console.log('¡Me gusta!');
    // Puedes agregar aquí la lógica adicional, como enviar una solicitud al servidor, actualizar la interfaz de usuario, etc.
  }

  mostrarVentanaEmergente: boolean = false;

  abrirVentanaEmergente() {
    this.mostrarVentanaEmergente = true;
  }

}

