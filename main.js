const form = document.getElementById("form-agenda")
const nomeCompleto = []

let linhas = ""

form.addEventListener("submit", function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
})

function adicionaLinha(){
    const inputNomeCompleto = document.getElementById("nome-agenda")
    const inputNumeroTelefone = document.getElementById("numero-agenda")
    const inputEmail = document.getElementById("email-agenda")

    if (nomeCompleto.includes(inputNomeCompleto.value)){
        alert(`O nome: ${inputNomeCompleto.value} já foi cadastrado.`)
    } else {
        nomeCompleto.push(inputNomeCompleto.value)

        let linha = `<tr>`
        linha += `<td class="lower">${inputNomeCompleto.value}</td>`
        linha += `<td>${inputNumeroTelefone.value}</td>`
        linha += `<td>${inputEmail.value == "" ? "---" : inputEmail.value}</td>`
        linha += `</td>`

        linhas += linha
    }

    inputNomeCompleto.value = ""
    inputNumeroTelefone.value = ""
    inputEmail.value = ""

}

function atualizaTabela(){
    const corpoTabela = document.querySelector("tbody")
    corpoTabela.innerHTML = linhas
}