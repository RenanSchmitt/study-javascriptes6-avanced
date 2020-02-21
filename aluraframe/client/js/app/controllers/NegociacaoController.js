class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);        
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._listaNegociacoes = new ListaNegociacoes();
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
         this._limpaFormulario();

        this._listaNegociacoes.adiciona(negociacao);
        console.log(this._listaNegociacoes.negociacoes);
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }
}