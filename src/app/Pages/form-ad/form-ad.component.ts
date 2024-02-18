import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-ad.component.html',
  styleUrl: './form-ad.component.scss'
})
export class FormAdComponent {
  id!:any;
  animalDetalle!:any;
  constructor(private servicio: ApiService, private rutaActivada: ActivatedRoute) { }

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe(params => {
      //console.log(params);
           this.id = params.get("id")
     console.log("Soy Id",params.get("id"));
    })

    this.servicio.getFormById(this.id).subscribe((data:any)=>{
      console.log("Soy datos",data);
      this.animalDetalle=data
    })
}

currentPage: string = 'datos'; // Página inicial

goToPage(page: string) {
  this.currentPage = page; // Cambia la página actual
}
}
