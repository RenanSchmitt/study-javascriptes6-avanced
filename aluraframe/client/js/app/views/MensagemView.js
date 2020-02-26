class MensagemView extends View{

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.text ? `<p class="alert alert-info">${model.text}</p>` : '<p></p>';
    }

  }     