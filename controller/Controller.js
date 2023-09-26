import Model from "../model/Model.js";
import NagyKepView from "../view/NagyKepView.js"

class Controller {
  adat = [];
  constructor() {
    const MODEL = new Model();
    const NAGYKEP = new NagyKepView($(".nagykep"), MODEL.getAktKep());
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
  }
}

export default Controller;
