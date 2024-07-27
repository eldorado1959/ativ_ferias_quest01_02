"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Classe representando um voo mágico
var Voo = /** @class */ (function () {
    // Construtor inicializando número do voo, data e cadeiras (até 100)
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.cadeiras = Array(100).fill(false); // Inicializa todas as cadeiras como desocupadas (false)
    }
    // Retorna o índice da próxima cadeira livre
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.cadeiras.length; i++) {
            if (!this.cadeiras[i]) {
                return i + 1; // Retorna o número da cadeira (1 a 100)
            }
        }
        return -1; // Se não houver cadeira livre
    };
    // Verifica se uma cadeira específica está ocupada
    Voo.prototype.verifica = function (cadeira) {
        return this.cadeiras[cadeira - 1];
    };
    // Ocupa uma cadeira específica se estiver livre
    Voo.prototype.ocupa = function (cadeira) {
        if (cadeira < 1 || cadeira > 100) {
            throw new Error("Número de cadeira inválido.");
        }
        if (!this.cadeiras[cadeira - 1]) {
            this.cadeiras[cadeira - 1] = true;
            return true;
        }
        return false; // Se a cadeira já estiver ocupada
    };
    // Retorna o número de vagas disponíveis
    Voo.prototype.vagas = function () {
        return this.cadeiras.filter(function (cadeira) { return !cadeira; }).length;
    };
    // Retorna o número do voo
    Voo.prototype.getVoo = function () {
        return this.numeroVoo;
    };
    // Retorna a data do voo
    Voo.prototype.getData = function () {
        return this.data;
    };
    // Clona o objeto atual, criando uma nova instância com os mesmos valores
    Voo.prototype.clone = function () {
        var novoVoo = new Voo(this.numeroVoo, new Date(this.data));
        novoVoo.cadeiras = __spreadArray([], this.cadeiras, true);
        return novoVoo;
    };
    return Voo;
}());
// Função auxiliar para ler data do console
function lerData() {
    console.log('Informe data');
    var dia = readlineSync.questionInt("dia: ");
    var mes = readlineSync.questionInt("mes: ");
    var ano = readlineSync.questionInt("ano: ");
    console.log('Informe horario');
    var hora = readlineSync.questionInt("Informe a hora: ");
    var minuto = readlineSync.questionInt("Informe o minuto: ");
    console.log('data do voo: ', dia, mes, ano);
    //return new Date(ano, mes - 1, dia, hora, minuto);
}
// Exemplo de uso
console.log('[1000] SAO PAULO | [1100] RIO JANEIRO | [1200] BRASILIA | [1300] MACEIO ');
var numeroVoo = readlineSync.question("Informe o numero do voo: ");
var data = lerData();
var voo = new Voo(numeroVoo, data);
console.log("N\u00FAmero do voo: ".concat(voo.getVoo()));
console.log("Data do voo: ".concat(voo.getData()));
console.log("Pr\u00F3xima cadeira livre: ".concat(voo.proximoLivre()));
console.log("Ocupando cadeira 1: ".concat(voo.ocupa(1)));
console.log("Cadeira 1 ocupada: ".concat(voo.verifica(1)));
console.log("N\u00FAmero de vagas dispon\u00EDveis: ".concat(voo.vagas()));
var vooClone = voo.clone();
console.log("N\u00FAmero do voo clonado: ".concat(vooClone.getVoo()));
console.log("Data do voo clonado: ".concat(vooClone.getData()));
