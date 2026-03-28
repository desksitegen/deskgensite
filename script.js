let keyCorreta = [
"DESK-EIGL",
"DESK-XDQX",
"DESK-JSGX"
]
let contador = 0

function login(){

let key = document.getElementById("key").value

if(keyCorreta.includes(key)){

document.getElementById("login").style.display="none"
document.getElementById("painel").style.display="block"

}

else{

document.getElementById("erro").innerText="KEY inválida"

}

}

function gerar(){

let tipo = document.getElementById("tipo").value
let resultado = document.getElementById("resultado")

let nome = Math.random().toString(36).substring(2,8)
let numero = Math.floor(Math.random()*9999)

let senha = Math.random().toString(36).substring(2,10)

let conta

if(tipo=="gmail"){

conta = nome+numero+"@gmail.com | "+senha

}

if(tipo=="outlook"){

conta = nome+numero+"@outlook.com | "+senha

}

if(tipo=="netflix"){

conta = nome+numero+"@yahoo.com | "+senha

}

if(tipo=="spotify"){

conta = nome+numero+"@gmail.com | "+senha

}

resultado.value = conta

contador++

document.getElementById("count").innerText = contador

}