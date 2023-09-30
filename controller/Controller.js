import Model from "../model/Model.js";
import NagyKepView from "../view/NagyKepView.js"
import KisKepView from "../view/KisKepView.js";

class Controller {
  adat = [];
  constructor() {
    const MODEL = new Model();
    const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep());
    const KISKEP = new KisKepView($(".kiskep"), MODEL.getKisKep());
    $(window).on("bal", () => {
      MODEL.bal()
      let aktKep = MODEL.getAktKep();
      NAGYKEP.nagyKepElemBeallit(aktKep);
    })
    $(window).on("jobb", () => {
      MODEL.jobb()
      let aktKep = MODEL.getAktKep();
      NAGYKEP.nagyKepElemBeallit(aktKep);
    })

    $(window).on("nagyit", () => {
      let aktKep = MODEL.getKisKep();
      KISKEP.kisKepElemBeallit(aktKep);
    });
  }
}

export default Controller;
