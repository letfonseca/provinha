let botaoAdicionar = document.querySelector('#adicionar-roupa')
botaoAdicionar.addEventListener('click', function (evento) {
    evento.preventDefault()

    let form = document.querySelector('#adiciona-form')

    let roupa = obterValoresDoForm(form)

    let erros = validaRoupa(roupa)

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }

    adicionaRoupaNaTabela(roupa)

    let mensagemErro = document.querySelector('#mensagem-erro')
    mensagemErro = ''
})

function validaRoupa(roupa) {
    let erros = []

    if (roupa.nome.length == 0) {
        erros.push('O nome não pode estar em branco')
    }
    if (roupa.tamanho.length == 0) {
        erros.push('O tamanho da roupa não pode estar em branco')
    }
    if (roupa.cor.length == 0) {
        erros.push('A cor da roupa não pode estar em branco')
    }
    if (roupa.preco.length == 0) {
        erros.push('O preço não pode estar em branco')
    }
    if (roupa.estoque.length == 0) {
        erros.push('O estoque não pode estar em branco')
    }

    return erros
}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagem-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaRoupaNaTabela(roupa) {
    let roupaTr = montarTr(roupa)
    let tabela = document.querySelector('#tabela-roupas')
    tabela.appendChild(roupaTr)
}

function montarTr(roupa) {
    let roupaTr = document.createElement('tr')
    roupaTr.classList.add('roupa')

    roupaTr.appendChild(montarTd(roupa.nome, 'info-nome'))
    roupaTr.appendChild(montarTd(roupa.tamanho, 'info-tamanho'))
    roupaTr.appendChild(montarTd(roupa.cor, 'info-cor'))
    roupaTr.appendChild(montarTd(roupa.preco, 'info-preco'))
    roupaTr.appendChild(montarTd(roupa.estoque, 'info-estoque'))

    return roupaTr
}

function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado

    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let roupa = {
        nome: form.nome.value,
        tamanho: form.tamanho.value,
        cor: form.cor.value,
        preco: form.preco.value,
        estoque: form.estoque.value,

    }

    return roupa
}