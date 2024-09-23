
class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>La peor pelicula no se me ocurre, la ultima de matrix</p>
        `;
    }
}

customElements.define("team-cat", MiComponente123);