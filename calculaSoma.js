let titulo = document.querySelector('.cabecalho')
titulo.textContent = 'Cuiabá Malhas e Roupas'
let clientes = document.querySelectorAll('.roupa')
let soma = 0
console.log(roupas)
let camposoma = document.querySelector('.soma')
for (let i = 0; i <= roupa.length; i++) {
    let roupa = roupa[i]


    let estoqueTd = cliente.querySelector('.info-estoque')

    let estoque = Number(estoqueTd.textContent)


    soma = soma + estoque

    camposoma.textContent = soma
}