const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 10);

}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let num = 1;
    let soma = 0;

    do {
        soma += num;
        num++;
    } while (num <= 100);

    console.log("Soma =", soma);

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let n = 1;

    do {
        if (n % 2 === 0) console.log(n);
        n++;
    } while (n <= 50);

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let contador = 1;
    let total = 0;

    do {
        let valor = Number(prompt(`Digite o ${contador}º número:`));
        total += valor;
        contador++;
    } while (contador <= 5);

    console.log("Média =", total / 5);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let numero = Number(prompt("Digite um número:"));
    let x = 1;

    do {
        console.log(`${numero} x ${x} = ${numero * x}`);
        x++;
    } while (x <= 10);

}
btnEx05.addEventListener('click', ex05)

function ex06() {
    let valor = Number(prompt("Digite um número inteiro positivo:"));
    let d = 1;

    do {
        if (valor % d === 0) console.log(d);
        d++;
    } while (d <= valor);

}
btnEx06.addEventListener('click', ex06)

function ex07() {
    let numPrimo = Number(prompt("Digite um número:"));
    let divisor = 1;
    let qtdDiv = 0;

    do {
        if (numPrimo % divisor === 0) qtdDiv++;
        divisor++;
    } while (divisor <= numPrimo);

    if (qtdDiv === 2) console.log("É primo");
    else console.log("Não é primo");

}
btnEx07.addEventListener('click', ex07)

function ex08() {
    let limite = Number(prompt("Digite um número limite:"));

    let a = 0, b = 1;

    console.log(a);
    console.log(b);

    let proximo;

    do {
        proximo = a + b;
        if (proximo > limite) break;
        console.log(proximo);
        a = b;
        b = proximo;
    } while (true);

}
btnEx08.addEventListener('click', ex08)

function ex09() {
    let c = 1;
    let somaIdades = 0;

    do {
        let nome = prompt(`Digite o nome da ${c}ª pessoa:`);
        let idade = Number(prompt(`Digite a idade de ${nome}:`));

        somaIdades += idade;
        c++;
    } while (c <= 5);

    console.log("Média das idades =", somaIdades / 5);

}
btnEx09.addEventListener('click', ex09)

function ex10() {
    let i2 = 1;
    let a2 = 0, b2 = 1;

    console.log(a2);
    console.log(b2);

    do {
        let prox = a2 + b2;
        console.log(prox);
        a2 = b2;
        b2 = prox;
        i2++;
    } while (i2 <= 18); // já mostramos 2 números

}
btnEx10.addEventListener('click', ex10)

function ex11() {
    let limite2 = Number(prompt("Digite um número:"));
    let somaPar = 0;
    let k = 1;

    do {
        if (k % 2 === 0) somaPar += k;
        k++;
    } while (k <= limite2);

    console.log("Soma dos pares =", somaPar);

}
btnEx11.addEventListener('click', ex11)

function ex12() {
    let j = 1;

    do {
        if (j % 2 !== 0) console.log(j);
        j++;
    } while (j <= 50);

}
btnEx12.addEventListener('click', ex12)

function ex13() {
    let dig = prompt("Digite um número:");
    let idx = 0;

    do {
        console.log(dig[idx]);
        idx++;
    } while (idx < dig.length);

}
btnEx13.addEventListener('click', ex13)

function ex14() {
    let f = Number(prompt("Digite um número:"));
    let fat = 1;
    let y = 1;

    do {
        fat *= y;
        y++;
    } while (y <= f);

    console.log(`Fatorial de ${f} = ${fat}`);

}
btnEx14.addEventListener('click', ex14)

function ex15() {
    let somaI = 0;
    let cont = 0;
    let nome2;

    do {
        nome2 = prompt("Digite o nome (ou 'fim' para encerrar):");

        if (nome2.toLowerCase() === "fim") break;

        let idade2 = Number(prompt("Digite a idade:"));
        somaI += idade2;
        cont++;

    } while (true);

    if (cont > 0) {
        console.log("Média das idades =", somaI / cont);
    } else {
        console.log("Nenhuma idade foi informada.");
    }

}
btnEx15.addEventListener('click', ex15)