import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'https://rickandmortyapi.com/api'; //funciones que quiero que exista en toda mi api
  public animalesUrl: string = `${this.baseUrl}/character`; //endpoint

  constructor(private http: HttpClient) {}
  //por filtro, genero
  public filtrarAnimalesPorGenero(gender: string) {
    return this.http.get(`${this.animalesUrl}/?gender=${gender}`);
  }
  //por edad
  public filtrarAnimalesPorEdad(edad: string) {
    return this.http.get(`${this.animalesUrl}/?edad=${edad}`);
  }
  //por ciudad
  public filtrarAnimalesPorCiudad(Ciudad: string) {
    return this.http.get(`${this.animalesUrl}/?Ciudad=${Ciudad}`);
  }
  //por especie
  public filtrarAnimalesPorEspecie(species: string) {
    return this.http.get(`${this.animalesUrl}/?species=${species}`);
  }
  //por Tamaño
  public filtrarAnimalesPorSize(size: string) {
    return this.http.get(`${this.animalesUrl}/?size=${size}`);
  }


  //lista
  public getAnimales() {
    return this.http.get(this.animalesUrl);
  }
  //por id
  public getAnimalbyId(id: string) {
    return this.http.get(`${this.animalesUrl}/${id}`);
  }
  public postAnimal(Animal: any) {
    return this.http.post(this.animalesUrl, Animal);
  }
  putAnimal(id: string, animal: any) {
    return this.http.put(`${this.animalesUrl}/${id}`, animal);
  }

  public borrarAnimal(id: string) {
    return this.http.delete(`${this.animalesUrl}/${id}`);
  }
}




















//por paginado
  //  public getAnimalesP(page: number, limit: number = 10){
  //    const apiUrl = `${this.animalesUrl}?page=${page}&limit=${limit}`;
  //    console.log('API URL:', apiUrl);
  //    return this.http.get(apiUrl)
  //  }
