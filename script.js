'use strict';
const botones = document.querySelectorAll('.btn');
console.log(botones);
const display = document.getElementById('display');
let num = 0;
let init = true;
let primerNumero = 0;
let segundoNumero = 0;
let detectorDeOperador = false;
let operador = '';
const NUMEROS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '兀'];
let fact = 0;

const factorizador = function (num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

const calcular = function (primerNumero, operador, segundoNumero) {
  primerNumero = parseFloat(primerNumero);
  segundoNumero = parseFloat(segundoNumero);
  switch (operador) {
    case '+':
      let suma = primerNumero + segundoNumero;
      display.textContent = suma.toFixed(2);
      break;

    case '-':
      let resta = primerNumero - segundoNumero;
      display.textContent = resta;
      break;

    case '/':
      if (segundoNumero != 0) {
        let divide = primerNumero / segundoNumero;
        display.textContent = divide;
      } else display.textContent = 'Math Error';
      break;
    case '*':
      let multiplica = primerNumero * segundoNumero;
      display.textContent = multiplica;
      break;
    case 'x²':
      let cuadrado = primerNumero * primerNumero;
      display.textContent = cuadrado;
      break;
    case 'x³':
      let alcubo = primerNumero * primerNumero * primerNumero;
      display.textContent = alcubo;
    case 'xⁿ':
      let xn = Math.pow(primerNumero, segundoNumero);
      display.textContent = xn;
      break;
    case '²√':
      if (primerNumero < 0) {
        display.textContent = 'el numero es negativo';
      } else {
        let raizcuad = Math.sqrt(primerNumero);
        display.textContent = raizcuad;
      }
      break;
    case 'ⁿ√':
      let sn = 1 / segundoNumero;
      let raizn = Math.pow(primerNumero, sn);
      display.textContent = raizn;
      break;

    case 'e':
      let e = Math.exp(primerNumero);
      display.textContent = e;
      break;
    case 'log':
      if (primerNumero <= 0) {
        display.textContent = 'el numero debe ser > a 0';
      } else {
        let log = Math.log10(primerNumero);
        console.log(log);
        display.textContent = log.toString();
      }
      break;
    case 'cos':
      let cos = Math.cos(primerNumero);
      display.textContent = cos;
      break;
    case 'sin':
      let sin = Math.sin(primerNumero);
      display.textContent = sin;
      break;
    case 'tg':
      let tg = Math.tan((primerNumero * Math.PI) / 180);
      display.textContent = tg;
      break;
    case 'ln':
      if (primerNumero <= 0) {
        display.textContent = 'Debe ser > a 0';
      } else {
        let ln = Math.log(primerNumero);
        display.textContent = ln;
      }
      break;
    case '³√':
      let cubo = Math.cbrt(primerNumero);
      display.textContent = cubo;
      break;
    case 'x!':
      let x = factorizador(primerNumero);
      display.textContent = x;
      break;
  }
};

const valor = function (e) {
  let hh = e.target.innerHTML;
  console.log(hh);
  console.log(typeof hh);
  if (init) {
    display.textContent = null;
    init = false;
    console.log(init);
  }
  if (hh === 'AC') {
    primerNumero = 0;
    segundoNumero = 0;
    operador = '';
    detectorDeOperador = false;
    display.textContent = 0;
  }
  if (NUMEROS.includes(hh)) {
    if (detectorDeOperador) {
      detectorDeOperador = false;
      display.textContent = null; 
    }
    let concatenado = display.textContent.concat(hh);
    display.textContent = concatenado;
    console.log(concatenado);
  } else if (hh == '=') {
    segundoNumero = display.textContent;
    calcular(primerNumero, operador, segundoNumero);
  } else {
    primerNumero = display.textContent;
    operador = hh;
    detectorDeOperador = true;
  }
};

let i = 0;
for (i = 0; i < botones.length; i++) {
  console.log(botones[i]);
  botones[i].addEventListener('click', valor);
}
