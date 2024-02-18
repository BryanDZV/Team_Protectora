import { Form } from './../../interface/form';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FiltroModalComponent } from '../../filtros/filtros-modal/filtro-modal.component';
import { PopUp2Component } from '../../pop-up2/pop-up2.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCommonModule } from '@angular/material/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-ad',
  standalone: true,
  imports: [
    MatCommonModule,
    PopUp2Component,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    CommonModule,ReactiveFormsModule,
    NavBarComponent,
  ],
  templateUrl: './form-ad.component.html',
  styleUrl: './form-ad.component.scss',
})
export class FormAdComponent {
  id!: any;
  forms!: any;
  animalDetalle!: any;
  adoptForm!: FormGroup;
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  constructor(
    private servicio: ApiService,
    private rutaActivada: ActivatedRoute,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    this.adoptForm = this.formBuilder.group({
    name: [''],
    email: [''],
    telf: [''],
    dni: [''],
    direction: [''],
    postal: [''],
    city: [''],
    conditions: [''],
    pets: [''],
    which: [''],
    petfrienly: [''],
    needs: [''],
    expenses: [''],
    food: [''],
    home: [''],
    rental: [''],
    casero: [''],
    removal: [''],
    garden: [''],
    family: [''],
    agreement: [''],
    visit: [''],
    });
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

  // intento de llamada al servidor y "formulario"

    onSubmit() {

    }

  abrirVentanaEmergente(): void {

    const dialogRef = this.dialog.open(PopUp2Component, {
      width: '400px',
      data: { animales: this.abrirVentanaEmergente, contexto: 'galeria' },
    });

      const personalDate = this.adoptForm.value;
      // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servicio
      this.http
      .post<{ Form : Form }>('http://localhost:5002/form/register/', {
        form: this.adoptForm.getRawValue(),
      })
      .subscribe((response) => {
        console.log('response', response);
        this.router.navigateByUrl('/login');
        alert('Usuario registrado correctamente');
      });

      console.log('Datos del formulario:', this.adoptForm.getRawValue());

  }
}
