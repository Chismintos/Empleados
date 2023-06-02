export default class Nodo {
    data: any;
    enlace: Nodo | null;
  
    constructor(data: any) {
      this.data = data;
      this.enlace = null;
    }
  }