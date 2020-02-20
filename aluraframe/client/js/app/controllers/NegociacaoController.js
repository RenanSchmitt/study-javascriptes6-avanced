class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);        
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
    }

    adicionar(event) {
        event.preventDefault();
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        )
        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));
            
    }
}