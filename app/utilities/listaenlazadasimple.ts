import Nodo from "./nodo";

export default class ListaEnlazadaSimple {
  cabeza: Nodo | null;

  constructor(cabeza: Nodo | null = null) {
    this.cabeza = cabeza;
  }

  insertar(data: any) {
    const nuevo = new Nodo(data);
    nuevo.enlace = this.cabeza;
    this.cabeza = nuevo;
  }

  insertarFinal(data: any) {
    const nuevo = new Nodo(data);
    let temp = this.cabeza;

    if (temp === null) {
      this.cabeza = nuevo;
    } else {
      while (temp.enlace !== null) {
        temp = temp.enlace;
      }

      temp.enlace = nuevo;
    }
  }

  insertarEntre(data: any, punto: any) {
    const nuevo = new Nodo(data);
    let temp = this.cabeza;

    if (temp === null) {
      this.cabeza = nuevo;
      return;
    }

    while (temp.enlace !== null) {
      if (temp.enlace.data === punto) {
        nuevo.enlace = temp.enlace;
        temp.enlace = nuevo;
        break;
      } else {
        temp = temp.enlace;
      }
    }
  }

    vaciar() {
    this.cabeza = null;
    }

    eliminar(eliminar: any) {
    let temp = this.cabeza;

    if (temp === null) {
      return;
    }

    if (temp.data === eliminar) {
      this.cabeza = temp.enlace;
      return;
    }

    while (temp.enlace !== null) {
      if (temp.enlace.data === eliminar) {
        temp.enlace = temp.enlace.enlace;
        break;
      } else {
        temp = temp.enlace;
      }
    }
  }

  impresion() {
    let temp = this.cabeza;
    let valores = '';
  
    while (temp !== null) {
      valores += `Nombre: ${temp.data.nombre}, Edad: ${temp.data.edad}, Correo: ${temp.data.correo}, Genero: ${temp.data.genero}\n`;
      temp = temp.enlace;
    }
  
    return valores;
  }
  
}
