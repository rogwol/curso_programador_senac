var rls = require("readline-sync")
var diaHoje = rls.question("Que dia é hoje? ")
var temperatura = rls.question("Qual a temperatura no momento? ")

if(temperatura >= 25){
    console.log("Liga o Ar-Condicionado!")
}else {
    if (temperatura >= 15) {
        console.log("Não mexe nisso aí não, o clima está bom.")
    } else {
        console.log("Ligar o ar no modo aquecedor, porque está frio")
    }
}