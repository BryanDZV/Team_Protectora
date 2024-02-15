import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { Slide1Component } from './slide1/slide1.component';
import { Slide2Component } from './slide2/slide2.component.js';
import { Slide3Component } from './slide3/slide3.component';
import { LoginComponent } from './login/login.component';
import { EleccionComponent } from './eleccion/eleccion.component';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './Pages/galeria/galeria.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { OptionComponent } from './Pages/option/option.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { AdopcionEstadoComponent } from './adopcion-estado/adopcion-estado.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'slide1', component: Slide1Component },
  { path: 'slide2', component: Slide2Component },
  { path: 'slide3', component: Slide3Component },
  { path: 'login', component: LoginComponent },
  { path: 'eleccion', component: EleccionComponent },
  { path: 'portada', component: PortadaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'perfil', component: ProfileComponent },
  { path: 'opciones', component: OptionComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'gallery/:id', component: DetalleComponent },
  { path: 'gallery', component: GaleriaComponent },
  { path: 'adopcion', component: AdopcionEstadoComponent },


];

export class AppRoutingModule {}
