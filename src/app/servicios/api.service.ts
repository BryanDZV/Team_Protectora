import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'http://localhost:5000'; //funciones que quiero que exista en toda mi api
  public animalesUrl: string = `${this.baseUrl}/animales`; //endpoint

  constructor(private http: HttpClient) {}

  // Filtrar por género
  public filtrarAnimalesPorGenero(genero: string) {
    return this.http.get(`${this.animalesUrl}/?genero=${genero}`);
  }

  // Filtrar por edad
  public filtrarAnimalesPorEdad(edad: number) {
    return this.http.get(`${this.animalesUrl}/?edad=${edad}`);
  }

  // Filtrar por ciudad
  public filtrarAnimalesPorCiudad(ciudad: string) {
    return this.http.get(`${this.animalesUrl}/?ciudad=${ciudad}`);
  }

  // Filtrar por especie
  public filtrarAnimalesPorEspecie(especie: string) {
    return this.http.get(`${this.animalesUrl}/?especie=${especie}`);
  }

  // Filtrar por tamaño
  public filtrarAnimalesPorSize(tamaño: string) {
    return this.http.get(`${this.animalesUrl}/?tamaño=${tamaño}`);
  }

  // Obtener todos los animales
  public getAnimales() {
    return this.http.get(this.animalesUrl);
  }

  // Obtener animal por ID
  public getAnimalbyId(id: string) {
    return this.http.get(`${this.animalesUrl}/${id}`);
  }

  // Agregar un nuevo animal
  public postAnimal(animal: any) {
    return this.http.post(this.animalesUrl, animal);
  }

  // Actualizar un animal existente
  public putAnimal(id: string, animal: any) {
    return this.http.put(`${this.animalesUrl}/${id}`, animal);
  }

  // Eliminar un animal
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
