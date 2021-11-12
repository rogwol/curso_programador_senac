var utf8 = require("utf8_encode")
var rls = require("readline-sync")

var nomeFuncionario = rls.question("Nome funcionário: ")
var horasTotais = rls.question("Horas Trabalhadas: ")
var horasExtras = 0
var valorTotalContrato = 0

if (horasTotais > 44) {
    horasExtras = horasTotais - 44
    } else {
        if(horasTotais == 44){
        horasExtras = 0
        valorTotalContrato = 44 * 10
    } else {
        valorTotalContrato = horasTotais * 10
    }
}
var valorTotalHorasExtras = horasExtras * 20
var valorTotalSemana = valorTotalContrato + valorTotalHorasExtras

console.log("O funcionário " + nomeFuncionario + " receberá um total de " + valorTotalSemana + "R$")