import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'http://localhost:5002';
  public animalesUrl: string = `${this.baseUrl}/animales`;

  public formUrl: string = `${this.baseUrl}/form`;
  public userUrl: string = `${this.baseUrl}/form`;


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

 //form
getFormConURL(url: string) {
  return this.http.get(url);
}
public getform() {
  return this.http.get(this.formUrl);
}
public getFormById(_id: any) {
  return this.http.get(`${this.formUrl}/${_id}`);
}
public postForm(form: any) {
  return this.http.post(this.formUrl, form);
}
public putForm(id: string, form: any) {
  return this.http.put(`${this.formUrl}/${id}`, form);
}
public borrarForm(id: string) {
  return this.http.delete(`${this.formUrl}/${id}`);
}

//user
getUserConURL(url: string) {
  return this.http.get(url);
}
public getUser() {
  return this.http.get(this.userUrl);
}
public getUserById(_id: any) {
  return this.http.get(`${this.userUrl}/${_id}`);
}
public postUser(User: any) {
  return this.http.post(this.userUrl, User);
}
public putUser(id: string, User: any) {
  return this.http.put(`${this.userUrl}/${id}`, User);
}
public borrarUser(id: string) {
  return this.http.delete(`${this.userUrl}/${id}`);
}

}
