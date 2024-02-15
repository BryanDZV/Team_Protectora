import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'http://localhost:5001';
  public animalesUrl: string = `${this.baseUrl}/animales`;

  constructor(private http: HttpClient) {}


  // getAnimalesFiltrados(filtros: any) {
  //   console.log('Filtros recibidos en ApiService:', filtros);
  //   let params = new HttpParams();
  //   for (const filtro in filtros) {
  //     if (filtros[filtro]) {
  //       params = params.append(filtro, filtros[filtro]);
  //     }
  //   }
  //   return this.http.get(this.animalesUrl, { params: params });
  // }

  getAnimalesConURL(url: string) {
    return this.http.get(url);
  }


  public getAnimales() {
    return this.http.get(this.animalesUrl);
  }

  public getAnimalbyId(id: string) {
    return this.http.get(`${this.animalesUrl}/${id}`);
  }

  public postAnimal(animal: any) {
    return this.http.post(this.animalesUrl, animal);
  }

  public putAnimal(id: string, animal: any) {
    return this.http.put(`${this.animalesUrl}/${id}`, animal);
  }

  public borrarAnimal(id: string) {
    return this.http.delete(`${this.animalesUrl}/${id}`);
  }
}


  // // Filtrar por género
  // public filtrarAnimalesPorGenero(genero: string) {
  //   return this.http.get(`${this.animalesUrl}/?genero=${genero}`);
  // }

  // // Filtrar por edad
  // public filtrarAnimalesPorEdad(edad: number) {
  //   return this.http.get(`${this.animalesUrl}/?edad=${edad}`);
  // }

  // // Filtrar por ciudad
  // public filtrarAnimalesPorCiudad(ciudad: string) {
  //   return this.http.get(`${this.animalesUrl}/?ciudad=${ciudad}`);
  // }

  // // Filtrar por especie
  // public filtrarAnimalesPorEspecie(especie: string) {
  //   return this.http.get(`${this.animalesUrl}/?especie=${especie}`);
  // }

  // // Filtrar por tamaño
  // public filtrarAnimalesPorSize(tamaño: string) {
  //   return this.http.get(`${this.animalesUrl}/?tamaño=${tamaño}`);
  // }








//por paginado
  //  public getAnimalesP(page: number, limit: number = 10){
  //    const apiUrl = `${this.animalesUrl}?page=${page}&limit=${limit}`;
  //    console.log('API URL:', apiUrl);
  //    return this.http.get(apiUrl)
  //  }
