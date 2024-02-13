import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss',
})
export class BuscadorComponent {
  @Input() filteredResults!: any[];
  @Output() filteredBuscador = new EventEmitter<any[]>();

  filteredAnimals: any[] = [];
  searchTerm: string = '';

  constructor() {}

  filterAnimals() {
    this.filteredAnimals = this.filteredResults.filter((animal) =>
      animal.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // Emitir los resultados filtrados al componente padre
    this.filteredBuscador.emit(this.filteredAnimals);
  }
}
