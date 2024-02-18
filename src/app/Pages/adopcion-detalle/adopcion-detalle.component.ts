import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { FiltroModalComponent } from '../../filtros/filtros-modal/filtro-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';//esta se inyectar en el constructor
@Component({
  selector: 'app-adopcion-detalle',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,


  ],
  templateUrl: './adopcion-detalle.component.html',
  styleUrl: './adopcion-detalle.component.scss',
})
export class AdopcionDetalleComponent {

  id!: any; //para guardar mi id que viene con router activate
  inputText!: string;//para guardar el value input
  animalEstado!: any;// para guardar el estado del animal segun seleccione para filtrar luego
  fotoSeleccionada1!: File;//para guardar las fotos
  fotoSeleccionada2!: File;
  fotoSeleccionada3!: File;
  seleccionarOpcion!: string;

  opciones: string[] = ['iva:90 $', 'vacuna:20$', 'gestión:15$'];//seccion iva desplegable
  checkedvisto1: boolean = false; //la cajita de chek
  checkedvisto2: boolean = false;
  horaElegida!: string;//guardo hora
  fechaSeleccionada!: Date;//guardo fecha



  constructor(
    private servicio: ApiService,
    private rutaActivada: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {}//aqui me traigo servicio, ruta activate para coger info de la url,iyecto lo q necesito
                                      //matDialog para el modal


  ngOnInit(): void {
    //inicio con la ruta para coger los datos url
    this.rutaActivada.paramMap.subscribe((params) => {
      //console.log(params);
      this.id = params.get('id');
      console.log('Soy Id', params.get('id'));
    });
//me suscribo al servicio y cojo los datos por id para pintar EN LOS COMPONENTES DETALLE
    this.servicio.getAnimalbyId(this.id).subscribe((data: any) => {
      console.log('Soy datos', data);
      this.animalEstado = data;
    });
  }

  //COMPONENTE ADOPCION DETALLE
  //funcion para subir las fotos al servidor /infoadicional
  seleccionarFoto1(event: any): void {
    this.fotoSeleccionada1 = event.target.files[0];
  }

  seleccionarFoto2(event: any): void {
    this.fotoSeleccionada2 = event.target.files[0];
  }

  seleccionarFoto3(event: any): void {
    this.fotoSeleccionada3 = event.target.files[0];
  }
// me creo una funcion para subir las fotos a mi base de datos
  subir(){
    const data={
      foto1: this.fotoSeleccionada1,
      foto2: this.fotoSeleccionada2,
      foto3: this.fotoSeleccionada3,
      opcion: this.seleccionarOpcion,
      visto1: this.checkedvisto1,
      visto2: this.checkedvisto2,
    };
// me suscribo a la funcion DE MI SERVICIO para enviar datos a mi data base
// Suscripción para enviar datos a la base de datos
this.servicio.enviarDatos(data).subscribe(
  (response: any) => {
    console.log('Datos enviados correctamente:', response);
    this.mostrarSnackBar('Subido al servidor con éxito'); // Mostrar mensaje de éxito
  },
  (error: any) => {
    console.error('No se ha enviado datos desde adopcion-Modal:', error);
    this.mostrarSnackBar('Error al subir al servidor'); // Mostrar mensaje de error
  }
);
}

// Método para mostrar un mensaje de Snackbar
mostrarSnackBar(mensaje: string) {
this.snackBar.open(mensaje, 'Cerrar', {
  duration: 3000, // Duración del mensaje en milisegundos
});
}


  ///empiezo de LOGICA ADOPCION ventanita enviar

  //1
  abrirVentanita(): void {
   this.dialog.open(FiltroModalComponent, {
      data: { contexto: 'adopcionDetalle' }
    });
  }

  //this.dialog.open() es el componente que deseas abrir en el cuadro de
  //diálogo. El segundo parámetro es una configuración opcional, donde puedes
  //especificar propiedades como el ancho (width), la altura (height), los datos
  // que deseas pasar al componente modal (data), entre otros.






}
