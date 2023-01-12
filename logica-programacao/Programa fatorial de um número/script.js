function fatorialNumero() {
    let inpNumero = document.getElementById('inpNumero')
    let outResultado = document.getElementById('outResultado')

    let numero = Number(inpNumero.value)

    if (numero == '' || isNaN(numero)) {
        alert('Digite um número')
        inpNumero.focus()
        return
    }

    fato = 1

    for (i = 1; i <= numero; i++) {
        fato = fato * i
    }

    outResultado.textContent = fato
}
let btnFatorial = document.getElementById('btnFatorial')
btnFatorial.addEventListener('click', fatorialNumero)