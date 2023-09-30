import { KEPEKLISTA, KISKEPEK } from "../adatok.js";

class Model {
  #kepLista = [];
  #kisKep =[];
  #id;
  constructor() {
    this.#kepLista = KEPEKLISTA;
    this.#kisKep = KISKEPEK;
    this.#id = 0;
  }

  getList(){
    return {...this.#kepLista}
  }

  getAktKep(){
    return this.#kepLista[this.#id]
  }

  getKisKep(){
    return this.#kisKep[this.#id]
  }

  getID(){
    return this.#id
  }

  jobb() {
    this.#id++;
    if (this.#id > this.#kepLista.length) {
      this.#id = 0;
    }
  }

  bal() {
    this.#id--;
    if (this.#id < 0) {
      this.#id = this.#kepLista.length - 1;;
    }
  }
}
export default Model;
