
class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Soy Mili</p>
        `;
    }
}

customElements.define("team-123", MiComponente123);