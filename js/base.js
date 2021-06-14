class Categoria {
    constructor() {
        this.id = undefined;
        this.nome = undefined;
        this.descricao = undefined;
        this.vencimento = undefined;
        this.valor = undefined
    }

    init(assign = { id, nome, descricao, vencimento, valor }) {
        Object.assign(this, assign);
        return this;
    }
}


class Despesa {

    /**
     * @param {[]Categoria} categorias
     */
    constructor(categorias = []) {
        this.categorias = categorias;
    }

    adicionar() {
        let categoria = this.lerDados();
        if (!this.validaCampos(categoria)) {
            return;
        }
        console.log(categoria);
        categoria.id = this.categorias.length + 1;
        this.categorias.push(categoria);
        this.desenhaTabela();
    }


    lerDados() {
        let categoria = new Categoria();
        return categoria.init(
            {
                nome: document.getElementById('categoria').value,
                descricao: document.getElementById('descricao').value,
                vencimento: document.getElementById('vencimento').value,
                valor: document.getElementById('valor').value
            }
        );
    }

    validaCampos(categoria) {
        let msg = '';

        if (categoria.nome == '') {
            msg += '- Informe a Categoria! \n';
        }

        if (categoria.vencimento == '') {
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
        document.getElementById("categoria").value = '';
        document.getElementById("vencimento").value = '';
        document.getElementById("valor").value = '';
        document.getElementById("descricao").value = '';
    }
    
 
    deletar(categoria) {
        for(let i=0; i < this.categorias.length; i++){
            if(categoria.id == this.categorias[i].id ){
                this.categorias.splice(i, 1);
            }
        }
     }

    editar(){  
    }

    desenhaTabela() {
        let tabela = document.getElementById("tb-dados-categoria");
        
        while(tabela.childNodes.length){
            tabela.childNodes[0].remove();
        }

        for (let i = 0; i < this.categorias.length; i++) {
            let tr = document.createElement("tr");
            let id = document.createElement("td");
            let categoria = document.createElement("td");
            let vencimento = document.createElement("td");
            let valor = document.createElement("td");
            let descricao = document.createElement("td");
            let acoes = document.createElement("td");

            let imagensEdit = document.createElement('img');
            imagensEdit.src = './assets/img/edite.png';
            

            let imagensDelet = document.createElement('img');
            imagensDelet.src = './assets/img/delete.png';
            //imagensDelet.setAttribute("onclick","categoria.deletar()");
            imagensDelet.addEventListener("click", (event)=>{
                this.deletar(this.categorias[i]);
                tr.remove();
            })
            acoes.appendChild(imagensEdit);
            acoes.appendChild(imagensDelet);
            //  console.log( this.categorias[i]);
            id.innerText = this.categorias[i].id;
            categoria.innerText  = this.categorias[i].nome;
            vencimento.innerText = this.categorias[i].vencimento;
            valor.innerText      = this.categorias[i].valor;
            descricao.innerText  = this.categorias[i].descricao;


            tr.appendChild(id);
            tr.appendChild(categoria);
            tr.appendChild(vencimento);
            tr.appendChild(valor);
            tr.appendChild(descricao);
            tr.appendChild(acoes);
            tabela.appendChild(tr);
            
        }
    }
}

var despesa = new Despesa();


   
//Função para calculo de gastos
function calcular() {
    let val1 = parseFloat(document.getElementById("number1").value);
    let val2 = parseFloat(document.getElementById("number2").value);
    let result = document.getElementById("result");

    result.value = val1 + val2;

}

//Função para seleção de despesa
function selecao() {
    var selecionado = document.getElementById("categoria").value;
    console.log(selecionado);
}



document.addEventListener("DOMContentLoaded", (event) => {
    selecao();
});
