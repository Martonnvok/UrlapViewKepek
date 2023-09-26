import Megjelenit from "./Megjelenit.js";
import AutoUrlapView from "./AutoUrlapView.js";

class Auto {
    adat = []
  constructor() {
    const UJADAT = $(".ujadat");
    const TAROLO = $(".tarolo");
    const AUTOURLAPVIEW = new AutoUrlapView(
      { tipus: "", rendszam: "" },
      UJADAT
    );
    const MEGJELENIT = new Megjelenit(this.adat, TAROLO);

    $(window).on("ujAdatHozzaAdas", (event) => {

      this.adat.push(event.detail);
        console.log(this.adat)
    });
  }
}

export default Auto;
