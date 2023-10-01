class KisKepView {
    #kep = []

    constructor(szuloElem, kep) {
        this.#kep = kep;
        this.szuloElem = szuloElem;
        this.kisKepNagy = false;

        this.#htmlLetrehozasa();
        this.kisIMGElem = $("#kisIMG");
        
        this.szuloElem.on("click", ".fokeplesz", (event) => {
            const index = $(event.target).attr("index");
            this.#esemenyTrigger("nagykep", index);
        });
    }

    kisKepElemBeallit(kepekMeret) {
        this.kisIMGElem.css({ width: kepekMeret, height: kepekMeret });
    }

    #htmlLetrehozasa() {
        let txt = `<div class="kisKepTarolo">`;
        for (let i = 0; i < this.#kep.length; i++) {
            txt += `<button class="fokeplesz" index="${i}"><img id="kisIMG" src="${this.#kep}" alt="${this.#kep}"></button>`;
        }

        txt += `</div>`;

        console.log(txt)
        this.szuloElem.html(txt)
    }

    #esemenyTrigger(esemenyNev, index) {
        const E = new CustomEvent(esemenyNev, { detail: index });
        window.dispatchEvent(E);
    }
}

export default KisKepView;