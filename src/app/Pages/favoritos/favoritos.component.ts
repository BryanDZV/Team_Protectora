import { Component,} from '@angular/core';
import Animal from '../../../../animal.interface';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [RouterLink,MatIconModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {
  animalesFavoritos: Animal[] = [];

  constructor(private apiService: ApiService) {
    this.animalesFavoritos = this.apiService.obtenerAnimalesFavoritos();
  }
}

