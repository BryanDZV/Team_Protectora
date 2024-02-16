import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//mi servicio
export class ApiService {
  public baseUrl: string = 'http://localhost:5000';
  public animalesUrl: string = `${this.baseUrl}/animales`;
  public formUrl: string = `${this.baseUrl}/form`;
  public userUrl: string = `${this.baseUrl}/form`;

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


  //animals
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
