class Megjelenit {
  #adat;
  constructor(adat, szuloElem) {
    this.#adat = adat;
    szuloElem.append('<table class="table table-bordered table-striped ">');
    this.tablaElem = szuloElem.children("table");
    this.#sor();
  }

  #sor() {
    let txt = "";

    txt += "<tr>";
    for (const key in this.#adat) {
      if (Object.hasOwnProperty.call(this.#adat, key)) {
        const element = this.#adat[key];
        txt += `<td>${element}</td>`;
      }
    }
    txt += "</tr>";
    this.tablaElem.append(txt);
  }
}

export default Megjelenit;
