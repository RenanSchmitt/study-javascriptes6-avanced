class View {

    constructor(elemento) {
        this._elemento = elemento;
    }

    template() {
        throw new Error('Template Class doesnt to implemented.')
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }

}