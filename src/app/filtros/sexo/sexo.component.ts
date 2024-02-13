import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sexo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sexo.component.html',
  styleUrl: './sexo.component.scss'
})
export class SexoComponent {
  public sexoSelecionado:any;
  public resultadosG:any[]=[];

@Output() filtradoSexo=new EventEmitter<any[]>();

constructor(private servicio: ApiService) {}

filtrarPorGenero(){
this.servicio
.filtrarAnimalesPorGenero(this.sexoSelecionado)
.subscribe((data:any)=>{
  console.log("soy genero",data);
  this.resultadosG=data.results;

  this.filtradoSexo.emit(this.resultadosG)
})
}











}
