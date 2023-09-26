
class NagKepView {
  #kep
  constructor(szuloElem, kep) {
    this.#kep = kep;
    this.szuloElem = szuloElem

    this.#htmlLetrehozasa()
    this.balGombElem = $("#balGomb");
    this.jobbGombElem = $("#jobbGomb");
    this.nagyIMGElem = $("#nagyIMG");
    this.balGombElem.on("click",()=>{
      this.#esemenyTrigger("bal");
    });

    this.jobbGombElem.on("click",()=>{
      this.#esemenyTrigger("jobb");

    });
  }
  nagyKepElemBeallit(kepeleresiut){
    this.nagyIMGElem.attr({"src":kepeleresiut, "src":kepeleresiut});
  }
  #htmlLetrehozasa(){
     let txt = "<button id = 'balGomb'> Bal </button>"
     txt += `<div class = "fokeptarolo" > <img id ="nagyIMG" src = "${this.#kep}" alt = "${this.#kep}"> </div>`
     txt += "<button id = 'jobbGomb'> Jobb </button>"
     console.log(txt)
     this.szuloElem.html(txt)
  }
  
  #esemenyTrigger(esemenyNev){
    const E = new CustomEvent(esemenyNev);
    window.dispatchEvent(E);
  }
}

export default NagKepView;
