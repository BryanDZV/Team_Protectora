interface Animal {
  _id: string;
  especie: string;
  edad: number;
  genero: string;
  foto: string;
  ciudad: string;
  nombre: string;
  tamaño: string;
  esterilizado:boolean;
  microchip:boolean;
  favorito?: boolean;
  peso:number;
  vacunado:boolean;
}


export default Animal;
