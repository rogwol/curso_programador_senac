
var readlinesync = require("readline-sync")

console.log("O que você deseja fazer?" +
            "\n Digite 1 - Saque" +
            "\n Digite 2 - Extrato" +
            "\n Digite 3 - Cartão" +
            "\n Digite 4 - Cheques")

            var opcao = readlinesync.question("Qual opção voce deseja?")

    switch(Number(opcao)){
        case 1:
            console.log("Quanto você quer sacar?")
            break
        case 2:
            console.log("Extrato de qual período?")
            break
        case 3:
            console.log("Qual dos cartões você deseja consultar?")
            console.log("1 - Visa " +
                        "\n 2 - Mastercard")    
            var bandeiraCartao = readlinesync.question("Qual dos cartoes voce deseja consultar?")
            
            switch (Number(bandeiraCartao)){
                case 1:
                    console.log("O Limite do seu cartão é de 2000,00")
                    break
                case 2:
                    console.log("O limite do seu cartão mastercard é de 5000,00")
                    break
                default:
                    console.log("Esta é uma opção inválida.")
                    break
            }
            break
        case 4:
            console.log("Quantas folhas deseja imprimir?")
            break
        default:
            console.log("Opção inválida!")
            break
    }