function exibirNome() {
    let inpNome = document.getElementById('inpNome')
    let outResultado = document.getElementById('outResultado')

    let nome = inpNome.value 

    if (nome == '') {
        alert('Informe seu nome')
        inpNome.focus()
        return
    }

    outResultado.textContent = `${nome} seja bem vindo!`
}
let btnEntrar = document.getElementById('btnEntrar')
btnEntrar.addEventListener('click', exibirNome)