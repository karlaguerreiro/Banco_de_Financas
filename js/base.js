class Despesa {

    constructor() {
        this.arrayCategoria = [];



    }




    adicionar() {
        let categoria = this.lerDados();

        if (this.validaCampos(categoria)) {
            
        }

        console.log(categoria);

    }


    lerDados() {
        let categoria = {}

        categoria.nomeCategoria = document.getElementById('categoria');
        categoria.descricao = document.getElementById('descricao').Value;
        categoria.vencimento = document.getElementById('vencimento').Value;
        categoria.valor = document.getElementById('valor').Value;

        return categoria;
    }

    validaCampos(categoria) {
        let msg = '';

        if(categoria.nomeCategoria == ''){
             msg += '- Informe a Categoria! \n';
        }

         if(categoria.vencimento == ''){
             msg += '- Informe o vencimento! \n';
        }

        if (categoria.valor == '') {
            msg += '- Informe o Valor! \n';
        }
        if (msg != '') {
            alert(msg);
            return false
        }
        return true;
    }

    cancelar() {



    }
}
var despesa = new Despesa();


