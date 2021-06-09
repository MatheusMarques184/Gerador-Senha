import geraSenha from './geradores';

const senhaGerada = document.querySelector('.resultado')
const qtdCaracter = document.querySelector('.caracter')
const checkNum = document.querySelector('.num')
const checkMaisc = document.querySelector('.maisc')
const checkMinus = document.querySelector('.minus')
const checkSimb = document.querySelector('.simb')
const gerarSenha = document.querySelector('.submit')

export default ()=>{
    gerarSenha.addEventListener('click',(e)=>{
        e.preventDefault();
        senhaGerada.innerHTML = gera()
    })
}

function gera(){
    const senha = geraSenha( qtdCaracter.value, checkNum.checked, checkMaisc.checked, checkMinus.checked, checkSimb.checked)
    return senha || "Seleciona ao menos 1 opção"
}