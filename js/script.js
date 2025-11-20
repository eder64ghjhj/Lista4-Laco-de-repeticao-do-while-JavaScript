const botao01 = document.querySelector('#ex01')
const botao02 = document.querySelector('#ex02')
const botao03 = document.querySelector('#ex03')
const botao04 = document.querySelector('#ex04')
const botao05 = document.querySelector('#ex05')
const botao06 = document.querySelector('#ex06')
const botao07 = document.querySelector('#ex07')
const botao08 = document.querySelector('#ex08')
const botao09 = document.querySelector('#ex09')
const botao10 = document.querySelector('#ex10')
const botao11 = document.querySelector('#ex11')
const botao12 = document.querySelector('#ex12')
const botao13 = document.querySelector('#ex13')
const botao14 = document.querySelector('#ex14')
const botao15 = document.querySelector('#ex15')
const res = document.querySelector('.res')

function limparDiv() {
    res.innerHTML = " "
}

const exercicio01 = botao01.addEventListener('click', () => {
    /*  Faça um programa que exiba os números de 1 a 10 usando o loop "do-while". */

    limparDiv()

    let contadora = 1

    do {
        res.innerHTML += contadora + "<br>"
        contadora++
    }
    while (contadora < 11)
})

const exercicio02 = botao02.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que calcule a soma dos números de 1 a 100 usando o loop "do-while". */

    let contadora = 1
    let soma = 0

    do {
        soma += contadora
        contadora++
    }
    while (contadora < 101)

    res.innerHTML = "O valor da soma dos números de 1 a 100 é: " + soma

})

const exercicio03 = botao03.addEventListener('click', () => {

    limparDiv()

    /*Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while".*/

    let contadora = 1

    do {
        if (contadora % 2 == 0) {
            res.innerHTML += contadora + "<br>"
        }
        contadora++
    }
    while (contadora < 51)
})

const exercicio04 = botao04.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos. */

    let contadora = 1
    let soma = 0

    do {
        let numero = Number(prompt(`Digite o ${contadora}º número: `))
        soma += numero
        contadora++
    } while (contadora < 6)

    let media = soma / (contadora - 1)

    res.innerHTML = (`Sua média dos 5 valores digitados é: ${media}`)


})

const exercicio05 = botao05.addEventListener('click', () => {

    limparDiv()

    /*Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while".*/

    let contadora = 1
    let numero = parseInt(prompt("Digite um número: "))

    do {
        res.innerHTML += (`${numero} X ${contadora} = ${numero * contadora}`) + "<br>"
        contadora++
    } while (contadora < 11)

})

const exercicio06 = botao06.addEventListener('click', () => {

    limparDiv()

    /*Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while".*/

    let contadora = 1

    let numero = parseInt(prompt("Digite um número: "))

    do {

        if (numero % contadora == 0) {
            res.innerHTML += contadora + "<br>"
        }
        contadora++
    }
    while (contadora <= numero)

})

const exercicio07 = botao07.addEventListener('click', () => {

    limparDiv()

    /* Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "do-while". */

    let contadora = 2
    let primo = true

    let numero = parseInt(prompt("Digite um valor: "))

    do {
        if (numero % contadora == 0) {
            primo = false
            break
        }

        contadora++

    }

    while (contadora < numero)

    if (primo) {
        res.innerHTML = `número ${numero} é primo.`
    }

    else {
        res.innerHTML = `número ${numero} não é primo.`
    }

})

const exercicio08 = botao08.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "do-while".*/

    let ultimoNumero = 0
    let penultimoNumero = 1
    let contadora = 1

    let numero = parseInt(prompt("Digite um valor: "))

    do {

        res.innerHTML += ultimoNumero + "<br>"

        let numeroAtual = ultimoNumero + penultimoNumero

        penultimoNumero = ultimoNumero
        ultimoNumero = numeroAtual

        contadora++
    }
    while (contadora <= numero)


})

const exercicio09 = botao09.addEventListener('click', () => {

    limparDiv()

    /* Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades. */

    let nome = prompt("Digite o nome dessa pessoa: ")
    let idade = parseInt(prompt(`Digite a idade da pessoa ${nome}: `))

    let soma = + idade
    let contadora = 1
    const divisor = 5

    do {
        nome = prompt("Digite o nome dessa pessoa: ")
        idade = parseInt(prompt(`Digite a idade da pessoa ${nome}: `))

        soma = + idade
    }
    while (contadora <= 5)

    let media = soma / divisor

    res.innerHTML = `A média dessas idades é ${media}`
})

const exercicio10 = botao10.addEventListener('click', () => {

    limparDiv()

    /*Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while".*/

    let penultimoNumero = 0
    let ultimoNumero = 1
    let contadora = 1

    do {

        res.innerHTML += `${contadora}º - ${penultimoNumero}` + "<br>"

        let numeroAtual = penultimoNumero + ultimoNumero

        ultimoNumero = penultimoNumero
        penultimoNumero = numeroAtual

        contadora++
    }
    while (contadora <= 20)

})

const exercicio11 = botao11.addEventListener('click', () => {

    limparDiv()

    /* Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "do-while". */

    let contadora = 1
    let soma = 0
    let numero = parseInt(prompt("Digite um valor: "))

    do {

        if (contadora % 2 == 0) {
            soma += contadora
            res.innerHTML += contadora + "<br>"
        }

        contadora++
    } while (contadora <= numero)
    res.innerHTML += `A soma dos números pares de 1 a ${numero} é ${soma}`

})

const exercicio12 = botao12.addEventListener('click', () => {

    limparDiv()

    /*Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while". */

    let contadora = 1
    let contadoraImpar = 1

    do {
        if (contadora % 2 == 1) {
            res.innerHTML += `${contadoraImpar}º - ` + contadora + "<br>"
            contadoraImpar++
        }
        contadora++
    } while (contadora <= 50)
})

const exercicio13 = botao13.addEventListener('click', () => {

    limparDiv()

    /*Faça um programa que leia um número inteiro e exiba os seus dígitos separadamente usando o loop "do-while".*/

    let numero = parseInt(prompt("Digite um número: "))
    let numeroString = numero.toString()
    let contadora = 0


    do {

        res.innerHTML += numeroString.charAt(contadora) + "<br>"
        contadora++
    }
    while (contadora < numeroString.length)

})

const exercicio14 = botao14.addEventListener('click', () => {

    limparDiv()

    /*Escreva um programa que calcule o fatorial de um número inteiro inserido pelo usuário usando o loop "do-while".*/

    let numero = parseInt(prompt("Digite um número: "))
    let contadora = 1
    let fatorial = 1

    do {
        
        fatorial = fatorial * contadora
        contadora++
        
    }
    while (contadora <= numero)
        res.innerHTML += fatorial 

})

const exercicio15 = botao15.addEventListener('click', () => {

    limparDiv()

    let contadora = 0;
    let soma = 0;
    let nome = "";       
    let nomeGrande = "";  

    do {
        nome = prompt(`Digite um nome (ou "fim" para parar):`);
        nomeGrande = nome.toUpperCase();

        if (nomeGrande != "FIM") {
            
            let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
            
            soma += idade;
            contadora++;      
        }
        
    } 
    while (nomeGrande != "FIM");

    if (contadora > 0) {
        let media = soma / contadora;
        res.innerHTML = `A média das ${contadora} idades é ${media}.`;
    } else {
        res.innerHTML = "Nenhuma idade foi inserida.";
    }
})

