import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'http://localhost:5002';
  public animalesUrl: string = `${this.baseUrl}/animales`;
  constructor(private http: HttpClient) {}


  
  //para subir imagenes
  SubirImagen(imageFile: File) {
    const imagenCliente = new FormData();
    imagenCliente.append('image', imageFile, imageFile.name);
    return this.http.post(`${this.baseUrl}`, imagenCliente);
  }

  //me creo una funcion para recoger los datos de imagenes y cheking y cuando pulse enviar los envie estan guardados en data
  enviarDatos(data: any) {
    return this.http.post(`${this.baseUrl}/aqui tengo q pone mi base da datos el edppoint q le de en db.js`, data);
  }





  //CRUD PARA INTERACTUAR CON BASE DE DATOS
  getAnimalesConURL(url: string) {
    return this.http.get(url);
  }
  public getAnimales() {
    return this.http.get(this.animalesUrl);
  }
  public getAnimalbyId(_id: any) {
    return this.http.get(`${this.animalesUrl}/${_id}`);
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
