class Model {
  #list = [];
  constructor() {
  }

  ujAdat(adat) {
    this.#list.push(adat);
  }

  getList(){
    return this.#list
  }
}
export default Model;
