var readlinesync = require("readline-sync")

var numeroReal = readlinesync.question("Digite qualquer numero: ")
var resultadofinal = 0

console.log("Qual a operação você deseja realizar com este número?" +
            "\n 101 - Raiz Quadrada" +
            "\n 102 - A Metade" +
            "\n 103 - 10% do número" +
            "\n 104 - O dobro"
    )

var opcao = readlinesync.question("Qual das operacoes voce deseja realizar com este numero? ")

switch (Number(opcao)) {
    case 101:
        resultadofinal = Math.sqrt(Number(numeroReal))
        break
    case 102:
        resultadofinal = Number(numeroReal) / 2
        break
    case 103:
        resultadofinal = Number(numeroReal) * 0.1
        break
    case 104:
        resultadofinal = Number(numeroReal) * 2
        break
    default:
        console.log("Você digitou uma opção inválida.")
        break
}

console.log("O resultado final é: " + resultadofinal)
