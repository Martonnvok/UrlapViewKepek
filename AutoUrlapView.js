class AutoUrlapView {
  #adat = {};

  constructor(adat, szuloElem) {
    this.szuloElem = szuloElem;
    this.szuloElem.html("<form>");
    this.formElem = this.szuloElem.children("form");
    this.#adat = adat;
    this.#urlapletrehozasa();
    this.submitElem = this.formElem.children("div").children("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#adatGyujt();
      this.#kattintasTrigger("ujAdatHozzaAdas");
    });
  }

  #adatGyujt() {
    const TIPUS = $("#tipus");
    const RENDSZAM = $("#rendszam");
    this.#adat.tipus = TIPUS.val();
    this.#adat.rendszam = RENDSZAM.val();
    console.log(this.#adat);
  }

  #urlapletrehozasa() {
    let txt = "<div class='form-group'>";
    txt += "<input type='text' id='tipus' name='tipus'>";
    txt += "<input type='text' id='rendszam' name='rendszam'>";
    txt += "<button id=submit type='button'>Kész</button>";
    txt += "</div>";
    this.formElem.append(txt);
  }

  #kattintasTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(E);
  }
}

export default AutoUrlapView;
