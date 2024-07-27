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
var dataRelogio = new Date(); // momento atual 
var horas = dataRelogio.getHours().toString().padStart(2, '0');
var minutos = dataRelogio.getMinutes().toString().padStart(2, '0');
var segundos = dataRelogio.getSeconds().toString().padStart(2, '0');
//const hhmmmss = [horas, minutos, segundos].join(':');
//console.log(hhmmmss.padStart(120, ' ')); 
// Classe representando um voo mágico
var Voo = /** @class */ (function () {
    // Construtor inicializando numero do voo, data e cadeiras (até 100)
    function Voo(numeroVoo, data) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.cadeiras = new Array(100).fill(false); // Inicializa todas as cadeiras como desocupadas (false)
    }
    // Retorna o índice da proxima cadeira livre
    Voo.prototype.proximoLivre = function () {
        for (var i = 0; i < this.cadeiras.length; i++) {
            if (!this.cadeiras[i]) {
                return i + 1; // Retorna o numero da cadeira (1 a 100)
            }
        }
        return -1; // Se nao houver cadeira livre
    };
    // Verifica se uma cadeira especifica esta ocupada
    Voo.prototype.verifica = function (cadeira) {
        return this.cadeiras[cadeira - 1];
    };
    // Ocupa uma cadeira especifica se estiver livre
    Voo.prototype.ocupa = function (cadeira) {
        if (cadeira < 1 || cadeira > 100) {
            throw new Error("Num. de cadeira invalido, Informe entre [1 e 100].");
        }
        if (!this.cadeiras[cadeira - 1]) {
            this.cadeiras[cadeira - 1] = true;
            return true;
        }
        return false; // Se a cadeira ja estiver ocupada
    };
    // Retorna o numero de vagas disponiveis
    Voo.prototype.vagas = function () {
        return this.cadeiras.filter(function (cadeira) { return !cadeira; }).length;
    };
    // Retorna o numero do voo
    Voo.prototype.getVoo = function () {
        return this.numeroVoo;
    };
    // Retorna a data do voo
    Voo.prototype.getData = function () {
        return this.data;
    };
    // Clona o objeto atual, criando uma nova instancia com os mesmos valores
    Voo.prototype.clone = function () {
        var novoVoo = new Voo(this.numeroVoo, new Date(this.data));
        novoVoo.cadeiras = __spreadArray([], this.cadeiras, true);
        return novoVoo;
    };
    return Voo;
}());
// Função auxiliar para ler data do console
function lerData() {
    while (true) {
        console.log('Informe data');
        var dia = readlineSync.questionInt("Dia: ");
        var mes = readlineSync.questionInt("Mes: ");
        var ano = readlineSync.questionInt("Ano: ");
        console.log('Informe horario');
        var hora = readlineSync.questionInt("Hora: ");
        var minuto = readlineSync.questionInt("Minuto: ");
        var dataInformada = new Date(ano, mes - 1, dia, hora, minuto);
        // leva em consideracao o horario informado, para poder ser valido
        // Verifica se a data informada é anterior à data atual
        var dataAtual = new Date();
        if (dataInformada < dataAtual) {
            console.log("Data informada e anterior a data atual. Por favor, informe uma data valida.");
        }
        else {
            return dataInformada;
        }
    }
}
// Função para limpar a tela
function limparTela() {
    console.clear();
    var hhmmmss = [horas, minutos, segundos].join(':');
    console.log(hhmmmss.padStart(120, ' '));
}
// Exemplo de uso de relogio
limparTela();
var voosDisponiveis = ['1000', '1100', '1200', '1300'];
// aceita somente os voos informados na tela
console.log('\n                     VOOS DISPONIVEIS');
console.log('\n[1000] SAO PAULO | [1100] RIO JANEIRO | [1200] BRASILIA | [1300] MACEIO');
var numeroVoo;
do {
    numeroVoo = readlineSync.question("Informe numero do voo: ");
    if (!voosDisponiveis.includes(numeroVoo)) {
        console.log("Numero invalido. Por favor, informe numero de voo valido.");
    }
} while (!voosDisponiveis.includes(numeroVoo));
var data = lerData();
var voo = new Voo(numeroVoo, data);
/*  MENU
Opção 1: Mostra a próxima cadeira livre.
Opção 2: Solicita ao usuário um número de cadeira e tenta ocupar a cadeira.
Opção 3: Solicita ao usuário um número de cadeira e verifica se a cadeira está ocupada.
Opção 4: Mostra o número de vagas disponíveis.
Opção 5: Mostra as informações do voo (número do voo e data).
Opção 6: Encerra o programa.
*/
function mostrarMenu() {
    console.log("\nMenu:");
    console.log("[1] PrOxima cadeira livre");
    console.log("[2] Ocupa uma cadeira");
    console.log("[3] Verifica se cadeira esta ocupada");
    console.log("[4] Numero de vagas disponiveis");
    console.log("[5] Mostrar informacoes do voo");
    console.log("[6] Sair");
}
var opcao = 0;
while (opcao !== 6) {
    mostrarMenu();
    opcao = readlineSync.questionInt("Opcao: ");
    switch (opcao) {
        case 1:
            console.log("Proxima cadeira livre: ".concat(voo.proximoLivre()));
            break;
        case 2:
            var cadeiraParaOcupar = readlineSync.questionInt("Informe numero da cadeira para ocupar [1-100]: ");
            if (voo.ocupa(cadeiraParaOcupar)) {
                console.log("Cadeira ".concat(cadeiraParaOcupar, " ocupada com sucesso."));
            }
            else {
                console.log("Cadeira ".concat(cadeiraParaOcupar, " esta ocupada ou numero invalido."));
            }
            break;
        case 3:
            var cadeiraParaVerificar = readlineSync.questionInt("Informe numero da cadeira para verificar [1-100]: ");
            if (voo.verifica(cadeiraParaVerificar)) {
                console.log("Cadeira ".concat(cadeiraParaVerificar, " esta ocupada."));
            }
            else {
                console.log("Cadeira ".concat(cadeiraParaVerificar, " esta livre."));
            }
            break;
        case 4:
            console.log("Numero de vagas disponiveis: ".concat(voo.vagas()));
            break;
        case 5:
            console.log("Numero do voo: ".concat(voo.getVoo()));
            console.log("Data do voo: ".concat(voo.getData()));
            break;
        case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Opçao inválida. Escolha uma opçao valida.");
            break;
    }
}
