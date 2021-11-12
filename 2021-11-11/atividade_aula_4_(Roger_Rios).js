// Atividade Aula 4 - 11/11/2021
// Aluno: Roger Lourenço Rios

var rds = require("readline-sync")
var opt = 0

console.log("-------------Menu-------------" + 
            "\nEscolha uma das opções abaixo:" + 
            "\n------------------------------" + 
            "\n1 - Gravar" + 
            "\n" + 
            "\n2 - Carregar" + 
            "\n" + 
            "\n3 - Apagar" + 
            "\n" + 
            "\n4 - Inserir" + 
            "\n" + 
            "\n5 - Fim" + 
            "\n------------------------------" +
            "\n" + 
            "\nDigite a opção." +
            "\n")

opt = rds.question("-> ")

switch(Number(opt)){
    case 1:
        console.log("\nA escolha foi: " + "Opção 1 - Gravar")
        break
    case 2:
        console.log("\nA escolha foi: " + "Opção 2 - Carregar")
        break
    case 3:
        console.log("\nA escolha foi: " + "Opção 3 - Apagar")
        break
    case 4:
        console.log("\nA escolha foi: " + "Opção 4 - Inserir")
        break
    case 5:
        console.log("\nA escolha foi: " + "Opção 5 - Fim")
        break
    default:
        console.log("\nA opção digitada é inválida, reinicie o programa e digite uma opção correta.")
        break
}
