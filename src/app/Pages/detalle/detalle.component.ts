import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon'
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MatTabsModule, MatIconModule],
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
}

