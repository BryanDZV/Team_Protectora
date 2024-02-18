import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { FiltroModalComponent } from '../../filtros/filtros-modal/filtro-modal.component';
import { PopUp2Component } from '../../pop-up2/pop-up2.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-form-ad',
  standalone: true,
  imports: [
    MatCommonModule,
    PopUp2Component,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    NavBarComponent,
  ],
  templateUrl: './form-ad.component.html',
  styleUrl: './form-ad.component.scss',
})
export class FormAdComponent {
  id!: any;
  forms!: any;
  animalDetalle!: any;
  constructor(
    private servicio: ApiService,
    private rutaActivada: ActivatedRoute,
    formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
    //intento de llamada al servidor y "formulario"
    //   this.personalDateForm = this.formBuilder.group({
    //     name: ['', Validators.required]
    //     // Otros campos del formulario...
    //   });
  }

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe((params) => {
      //console.log(params);
      this.id = params.get('id');
      console.log('Soy Id', params.get('id'));
    });

    this.servicio.getFormById(this.id).subscribe((data: any) => {
      console.log('Soy datos', data);
      this.animalDetalle = data;
    });
  }

  // Cambio de pagina
  currentPage: string = 'datos'; // Página inicial
  goToPage(page: string) {
    this.currentPage = page; // Cambia la página actual
  }

  currentPages: string = 'hogar'; // Página inicial
  goToPages(page: string) {
    this.currentPage = page; // Cambia la página actual
  }

  //intento de llamada al servidor y "formulario"
  // personalDateForm: FormGroup;
  //   onSubmit() {
  //     if (this.personalDateForm.valid) {
  //       const personalDate = this.personalDateForm.value;
  //       // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servicio
  //       console.log('Datos del formulario:', personalDate);
  //     } else {
  //       console.error('El formulario no es válido.');
  //     }
  //   }

  abrirVentanaEmergente(): void {
    const dialogRef = this.dialog.open(PopUp2Component, {
      width: '400px',
      data: { animales: this.abrirVentanaEmergente, contexto: 'galeria' },
    });
  }
}
