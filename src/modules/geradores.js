const rand = (min, max)=> Math.floor(Math.random()*(max-min)+min);
const geraNumero = () => String.fromCharCode(rand(48,58));
const geraMaiscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const simbolos = ',<.>/?:;{[}]+=_-)(*&^%$#@!~'
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qtd, num, maisc, minus,  simb) {
    const senhaArray=[]
    qtd = Number(qtd);
    for(let i=0;i<=qtd;i++){
        num && senhaArray.push(geraNumero());
        maisc && senhaArray.push(geraMaiscula());
        minus && senhaArray.push(geraMinuscula());
        simb && senhaArray.push(geraSimbolo());
    }
    return senhaArray.join('').slice(0,qtd)
}