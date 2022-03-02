let botao1 = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
let botao3 = document.getElementById("botao3");
let botao4 = document.getElementById("botao4");
let botao5 = document.getElementById("botao5");
let botao6 = document.getElementById("botao6");
let botao7 = document.getElementById("botao7");
let botao8 = document.getElementById("botao8");

let primeiroBotao = 0;
let segundoBotao = 0;
let valor = 0;

function getValue() {
  valor = document.getElementById("value").value;
}

function seleciona(arg) {
  if (arg == 1) {
    botao1.style.background = "black";
    botao1.style.color = "white";

    document.getElementById("value").value = "";
    valor = 0;

    botao2.style.background = "#F56C66";
    botao2.style.color = "white";
    botao3.style.background = "#F56C66";
    botao3.style.color = "white";
    botao4.style.background = "#F56C66";
    botao4.style.color = "white";

    primeiroBotao = 1;
  }
  if (arg == 2) {
    botao2.style.background = "black";
    botao2.style.color = "white";

    document.getElementById("value").value = "";
    valor = 0;

    botao1.style.background = "#F56C66";
    botao1.style.color = "white";
    botao3.style.background = "#F56C66";
    botao3.style.color = "white";
    botao4.style.background = "#F56C66";
    botao4.style.color = "white";

    primeiroBotao = 2;
  }
  if (arg == 3) {
    botao3.style.background = "black";
    botao3.style.color = "white";

    document.getElementById("value").value = "";
    valor = 0;

    botao1.style.background = "#F56C66";
    botao1.style.color = "white";
    botao2.style.background = "#F56C66";
    botao2.style.color = "white";
    botao4.style.background = "#F56C66";
    botao4.style.color = "white";

    primeiroBotao = 3;
  }
  if (arg == 4) {
    botao4.style.background = "black";
    botao4.style.color = "white";

    document.getElementById("value").value = "";
    valor = 0;

    botao1.style.background = "#F56C66";
    botao1.style.color = "white";
    botao2.style.background = "#F56C66";
    botao2.style.color = "white";
    botao3.style.background = "#F56C66";
    botao3.style.color = "white";

    primeiroBotao = 4;
  }
  if (arg == 5) {
    botao5.style.background = "black";
    botao5.style.color = "white";

    botao7.style.background = "#F56C66";
    botao7.style.color = "white";
    botao6.style.background = "#F56C66";
    botao6.style.color = "white";
    botao8.style.background = "#F56C66";
    botao8.style.color = "white";

    segundoBotao = 1;
  }
  if (arg == 6) {
    botao6.style.background = "black";
    botao6.style.color = "white";

    botao7.style.background = "#F56C66";
    botao7.style.color = "white";
    botao5.style.background = "#F56C66";
    botao5.style.color = "white";
    botao8.style.background = "#F56C66";
    botao8.style.color = "white";

    segundoBotao = 2;
  }
  if (arg == 7) {
    botao7.style.background = "black";
    botao7.style.color = "white";

    botao5.style.background = "#F56C66";
    botao5.style.color = "white";
    botao6.style.background = "#F56C66";
    botao6.style.color = "white";
    botao8.style.background = "#F56C66";
    botao8.style.color = "white";

    segundoBotao = 3;
  }
  if (arg == 8) {
    botao8.style.background = "black";
    botao8.style.color = "white";

    botao5.style.background = "#F56C66";
    botao5.style.color = "white";
    botao6.style.background = "#F56C66";
    botao6.style.color = "white";
    botao7.style.background = "#F56C66";
    botao7.style.color = "white";

    segundoBotao = 4;
  }
}

let convertido = 0;
let convertido2 = 0;
let myTotal = document.getElementById("total");
let myName = document.getElementById("person");

function chamaCalculadora() {
  if (primeiroBotao == 1 && segundoBotao == 1) {
    myTotal.innerHTML = valor;
    myName.innerHTML = 'decimal / decimal';
  }
  if (primeiroBotao == 1 && segundoBotao == 2) {
    convertido = converteDecimalOctal(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'decimal / octal';
  }
  if (primeiroBotao == 1 && segundoBotao == 3) {
    convertido = converteDecimalHexadecimal(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'decimal / hexadecimal';
  }
  if (primeiroBotao == 1 && segundoBotao == 4) {
    convertido = converteDecimalBinario(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'decimal / binario';
  }
  if (primeiroBotao == 2 && segundoBotao == 1) {
    valor = valor.toString();
    convertido = converteOctalDecimal(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'octal / decimal';
  }
  if (primeiroBotao == 2 && segundoBotao == 2) {
    myTotal.innerHTML = valor;
    myName.innerHTML = 'octal / octal';
  }
  if (primeiroBotao == 2 && segundoBotao == 3) {
    valor = valor.toString();
    convertido2 = converteOctalDecimal(valor);
    convertido = converteDecimalHexadecimal(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'octal / hexadecimal';
  }
  if (primeiroBotao == 2 && segundoBotao == 4) {
    valor = valor.toString();
    convertido2 = converteOctalDecimal(valor);
    convertido = converteDecimalBinario(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'octal / binário';
  }
  if (primeiroBotao == 3 && segundoBotao == 1) {
    valor = valor.toString().toUpperCase();
    convertido = converteHexadecimalDecimal(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'hexadecimal / decimal';
  }
  if (primeiroBotao == 3 && segundoBotao == 2) {
    valor = valor.toString().toUpperCase();
    convertido2 = converteHexadecimalDecimal(valor);
    convertido = converteDecimalOctal(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'hexadecimal / octal';
  }
  if (primeiroBotao == 3 && segundoBotao == 3) {
    myTotal.innerHTML = valor;
    myName.innerHTML = 'hexadecimal / hexadecimal';
  }
  if (primeiroBotao == 3 && segundoBotao == 4) {
    valor = valor.toString().toUpperCase();
    convertido2 = converteHexadecimalDecimal(valor);
    convertido = converteDecimalBinario(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'hexadecimal / binário';
  }
  if (primeiroBotao == 4 && segundoBotao == 1) {
    valor = valor.toString();
    convertido = converteBinarioDecimal(valor);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'binário / decimal';
  }
  if (primeiroBotao == 4 && segundoBotao == 2) {
    valor = valor.toString();
    convertido2 = converteBinarioDecimal(valor);
    convertido = converteDecimalOctal(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'binário / octal';
  }
  if (primeiroBotao == 4 && segundoBotao == 3) {
    valor = valor.toString();
    convertido2 = converteBinarioDecimal(valor);
    convertido = converteDecimalHexadecimal(convertido2);
    myTotal.innerHTML = convertido;
    myName.innerHTML = 'binário / hexadecimal';
  }
  if (primeiroBotao == 4 && segundoBotao == 4) {
    myTotal.innerHTML = valor;
    myName.innerHTML = 'binário / binário';
  }
}

function Temporizador(initiate) {
  if (initiate !== true) {
    chamaCalculadora();
  }
  setTimeout(Temporizador, 1000);
}

Temporizador(true);

//Funções de conversão
function converteDecimalOctal(dec) {
  let quociente = dec;
  let resto = 0;
  let octal = [];
  let counter = Infinity;

  while (counter >= 8) {
    resto = quociente % 8;
    quociente = Math.floor(quociente / 8);
    counter = quociente;
    octal.push(resto);
    if (quociente < 8) {
      octal.push(quociente);
    }
  }

  return octal.reverse().join("");
}

function converteDecimalHexadecimal(dec) {
  let hex = [];
  let resto = 0;
  let quociente = dec;
  let counter = Infinity;

  while (counter >= 16) {
    resto = quociente % 16;
    quociente = Math.floor(quociente / 16);
    counter = quociente;

    switch (resto) {
      case 10:
        hex.push("A");
        break;
      case 11:
        hex.push("B");
        break;
      case 12:
        hex.push("C");
        break;
      case 13:
        hex.push("D");
        break;
      case 14:
        hex.push("E");
        break;
      case 15:
        hex.push("F");
        break;
      default:
        hex.push(resto);
    }

    if (quociente < 16) {
      switch (quociente) {
        case 10:
          hex.push("A");
          break;
        case 11:
          hex.push("B");
          break;
        case 12:
          hex.push("C");
          break;
        case 13:
          hex.push("D");
          break;
        case 14:
          hex.push("E");
          break;
        case 15:
          hex.push("F");
          break;
        default:
          hex.push(quociente);
      }
    }
  }

  let hexadecimal = hex.toString();
  hexadecimal = hexadecimal.split("").reverse().join().replace(/,/g, "");
  hexadecimal = hexadecimal;

  return hexadecimal;
}

function converteOctalDecimal(oct) {
  let numInverso = oct.split("").reverse().join().replace(/,/g, "");
  let array = numInverso.split("");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = array[i] * Math.pow(8, i) + sum;
  }

  return sum;
}

function converteDecimalBinario(dec) {
  let divisor = 0;
  let array = [];
  let counter = 0;
  let resto = 0;
  let myNumber = dec;

  for (let i = myNumber; i >= 2; counter++) {
    divisor = Math.floor(i / 2);
    resto = i % 2;
    i = divisor;

    array[counter] = resto;
  }

  let binario = array.toString();
  binario = binario.split("").reverse().join().replace(/,/g, "");
  binario = "1" + binario;

  return binario;
}

function converteHexadecimalDecimal(hex) {
  let numInverso = hex.split("").reverse().join().replace(/,/g, "");
  let sum = 0;
  let array = numInverso.split("");

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "A":
        array[i] = 10;
        break;
      case "B":
        array[i] = 11;
        break;
      case "C":
        array[i] = 12;
        break;
      case "D":
        array[i] = 13;
        break;
      case "E":
        array[i] = 14;
        break;
      case "F":
        array[i] = 15;
        break;
    }
    sum = array[i] * Math.pow(16, i) + sum;
  }

  return sum;
}

function converteBinarioDecimal(bin) {
  let numInverso = bin.split("").reverse().join().replace(/,/g, "");
  let array = numInverso.split("");
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = array[i] * Math.pow(2, i) + sum;
  }

  return sum;
}

let person = document.getElementById("person").value 

function reset() {
  let reset = document.getElementById("reset");

  document.getElementById("value").value = "";
  convertido2 = 0;
  valor = 0;
  convertido = 0;
  primeiroBotao = 0;
  segundoBotao = 0;
  myTotal.innerHTML = 0;

  botao1.style.background = "#F56C66";
  botao1.style.color = "white";
  botao2.style.background = "#F56C66";
  botao2.style.color = "white";
  botao3.style.background = "#F56C66";
  botao3.style.color = "white";
  botao4.style.background = "#F56C66";
  botao4.style.color = "white";
  botao5.style.background = "#F56C66";
  botao5.style.color = "white";
  botao6.style.background = "#F56C66";
  botao6.style.color = "white";
  botao7.style.background = "#F56C66";
  botao7.style.color = "white";
  botao8.style.background = "#F56C66";
  botao8.style.color = "white";
}

meuValor = document.getElementById("value");

value.addEventListener("keypress", function (e) {
  if (!checkChar(e)) {
    e.preventDefault();
  }
});

function checkChar(e) {
  const char = String.fromCharCode(e.keyCode);

  let pattern = "[A-Za-z0-9]";

  if (primeiroBotao == 4) {
      pattern = "[1/0]"
  }

  if (primeiroBotao == 1 || primeiroBotao == 2) {
      pattern = "[0-9]"
  }

   if (char.match(pattern)) {
    console.log(char);
    return true;
    
  }
}

