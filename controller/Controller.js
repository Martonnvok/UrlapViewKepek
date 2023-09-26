import AutoUrlapView from "../view/AutoUrlapView.js";
import Model from "../model/Model.js";

class Controller {
  adat = [];
  constructor() {
    const UJADAT = $(".ujadat");
    const AUTOURLAPVIEW = new AutoUrlapView(
      { tipus: "", rendszam: "" },
      UJADAT
    );
    const MODEL = new Model();

    $(window).on("ujAdatHozzaAdas", (event) => {
      MODEL.ujAdat(event.detail);
      console.log(MODEL.getList());
    });
  }
}

export default Controller;
