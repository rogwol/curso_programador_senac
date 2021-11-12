var readlineSync = require("readline-sync")

var nomeUsuario = readlineSync.question("Qual seu nome?")
console.log("Oi meu nome é " + nomeUsuario)