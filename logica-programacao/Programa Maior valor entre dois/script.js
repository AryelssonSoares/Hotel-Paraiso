function maiorValor() {
    let inpNumeroUm = document.getElementById('inpNumeroUm')
    let inpNumeroDois = document.getElementById('inpNumeroDois')
    let outResultado = document.getElementById('outResultado')

    let numeroUm = Number(inpNumeroUm.value)
    let numeroDois = Number(inpNumeroDois.value)

    if (numeroUm == '' || numeroDois == '') {
        alert('Informe os valores corretamente')
        inpNumeroUm.focus()
        return
    }

    if (numeroUm > numeroDois) {
        outResultado.textContent = `O maior valor entre os dois é ${numeroUm}`
    } else {
        outResultado.textContent = `O maior valor entre os dois é ${numeroDois}`
    }
}
let btnMaior = document.getElementById('btnMaior')
btnMaior.addEventListener('click', maiorValor)