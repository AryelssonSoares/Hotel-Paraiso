
let pacientes = [];

function adicionarPaciente() {
    const inpPaciente = document.querySelector('#inpPaciente');
    const outLista = document.querySelector('#outLista');

    const nome = inpPaciente.value;

    if (nome === '') {
        alert('Informe o nome do paciente');
        inpPaciente.focus();
        return;
    }

    pacientes.push(nome);

    let lista = '';
    for(let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]} \n`
    }

    outLista.textContent = lista;

    inpPaciente.value = '';
    inpPaciente.focus();
}

const btnAdicionar = document.querySelector('#btnAdicionar');
btnAdicionar.addEventListener('click', adicionarPaciente);