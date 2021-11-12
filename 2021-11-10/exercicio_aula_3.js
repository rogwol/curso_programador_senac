// Exercício - 10/11/2021
// Roger L. Rios

var rls = require("readline-sync")

var nomeVendedor = rls.question("Informe o nome do vendedor: ")
var salarioVendedor = parseInt(rls.question("Informe o salario do vendedor: "))
var totalVendas = parseInt(rls.question("Qual o total de vendas efetuadas? "))
var difVendas = 0
var salarioTotal = 0
var comissao3 = 0
var comissao5 = 0
var comissaoVendas = 0

if (totalVendas >= 1000){
    difVendas = totalVendas - 1000
    comissao3 = 1000 * 0.03
    comissao5 = difVendas * 0.05
    comissaoVendas = comissao3 + comissao5
    salarioTotal = salarioVendedor + comissaoVendas
    console.log("O Vendedor " + nomeVendedor + " possui o salario fixo de R$" + salarioVendedor + ",00" + " e com a soma de sua Comissao, seu salario total e de: R$" + salarioTotal + ",00")
} else {
    comissao3 = totalVendas * 0.03
    salarioTotal = salarioVendedor + comissao3
    console.log("O Vendedor " + nomeVendedor + " possui o salario fixo de R$" + salarioVendedor + " e com a soma de sua Comissao, seu salario total e de: R$" + salarioTotal)
}