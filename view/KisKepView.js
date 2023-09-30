
class KisKepView {
    #kep

    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.kisKepNagy = false; 

        this.#htmlLetrehozasa();
        this.nagyitElem = $("#nagyit");
        this.kisIMGElem = $("#kisIMG");
        this.kisIMGElem.on("click", () => {
            if (this.kisKepNagy) {
                this.#esemenyTrigger("nagyit");
                this.kisKepElemBeallit("500px"); 
                this.kisKepNagy = false;
            } else {
                this.kisKepElemBeallit("200px"); 
                this.kisKepNagy = true;
            }
        });
    }

    kisKepElemBeallit(kepekMeret) { 
        this.kisIMGElem.css({ width: kepekMeret, height: kepekMeret });
    }

    #htmlLetrehozasa() {
        let txt = `<div class="kisKepTarolo">`;
        txt += `<button id="nagyit"><img id="kisIMG" src="kepek/meme1.jpg" alt="Kép 1"></button>`;
        txt += `</div>`;

        console.log(txt)
        this.szuloElem.html(txt)
    }

    #esemenyTrigger(esemenyNev) {
        const E = new CustomEvent(esemenyNev);
        window.dispatchEvent(E);
    }
}

export default KisKepView;
