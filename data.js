"use strict";
//Questão 2 - Calendário Mágico
//Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        if (this.ano > outraData.getAno() ||
            (this.ano === outraData.getAno() && this.mes > outraData.getMes()) ||
            (this.ano === outraData.getAno() && this.mes === outraData.getMes() && this.dia > outraData.getDia())) {
            return 1; // Retorna 1 se a data atual for posterior a outraData
        }
        else if (this.ano === outraData.getAno() &&
            this.mes === outraData.getMes() &&
            this.dia === outraData.getDia()) {
            return 0; // Retorna 0 se as datas forem iguais
        }
        else {
            return -1; // Retorna -1 se a data atual for anterior a outraData
        }
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getMesExtenso = function () {
        var meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1]; // Retorna o nome do mês correspondente
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.isBissexto = function () {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    };
    Data.prototype.clone = function () {
        return new Data(this.dia, this.mes, this.ano);
    };
    return Data;
}());
exports.Data = Data;
// Exemplo de uso
var data1 = new Data(12, 7, 2023);
var data2 = new Data(1, 1, 2024);
console.log("Data 1: ".concat(data1.getDia(), "/").concat(data1.getMes(), "/").concat(data1.getAno()));
console.log("Data 2: ".concat(data2.getDia(), "/").concat(data2.getMes(), "/").concat(data2.getAno()));
console.log("Compara\u00E7\u00E3o: ".concat(data1.compara(data2))); // Deve retornar -1, pois data1 é anterior a data2
console.log("M\u00EAs de Data 1: ".concat(data1.getMesExtenso()));
