function valorHora() {
    let inpSalario = document.getElementById('inpSalario')
    let inpHorasMensal = document.getElementById('inpHorasMensal')
    let outResposta = document.getElementById('outResposta')

    let salario = Number(inpSalario.value)
    let horasMensal = Number(inpHorasMensal.value)

    if (salario == '' || horasMensal == '') {
        alert('Informe os dados corretamente')
        inpSalario.focus()
        return
    }

    let valorHora = salario / horasMensal

    outResposta.textContent = `O trabalhador ganha R$ ${valorHora.toFixed(2)} por hora`
}
let btnValor = document.getElementById('btnValor')
btnValor.addEventListener('click', valorHora)