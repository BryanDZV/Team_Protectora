import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-size',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './size.component.html',
  styleUrl: './size.component.scss',
})
export class SizeComponent {
  public sizeSeleccionado: any;
  public resultadosS: any[] = [];
  @Output() filtradoSize = new EventEmitter<any[]>();

  constructor(private servicio: ApiService) {}

  filtrarPorSize() {
    this.servicio
      .filtrarAnimalesPorSize(this.sizeSeleccionado)
      .subscribe((data: any) => {
        this.resultadosS = data;
        this.filtradoSize.emit(this.resultadosS);
      });
  }
}
