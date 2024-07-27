"use strict";
/*Os erros encontrados sao devido a problemas de compatibilidade de versao e
tipos incorretos.

Erro de preenchimento da matriz:

metodo fill esta disponivel em versoes mais recentes do ECMAScript (ES6/ES2015 e posteriores).
Para resolver isso, garantir que compilador TypeScript esteja configurado para usar uma biblioteca compativel.

Erro de sobrecarga de Date:

Esse erro ocorre porque TypeScript esta tentando usar uma versao de Date de uma biblioteca diferente .

mas o codigo roda normalmente!!!

*/
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
            throw new Error("Numero de cadeira invalido.");
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
    return new Date(ano, mes - 1, dia, hora, minuto); // O mês é subtraído por 1
    /* A razão pela qual o mês precisa ser subtraído de 1 ao criar um objeto Date em JavaScript
     é devido à forma como o construtor da classe Date funciona.
     Em JavaScript, os meses são indexados de 0 a 11, onde 0 representa janeiro
      e 11 representa dezembro. Isso é um comportamento que vem desde a criação da linguagem*/
}
// Função para limpar a tela
function limparTela() {
    console.clear();
}
// Exemplo de uso
limparTela();
console.log('\n                     VOOS DISPONIVEIS');
console.log('\n[1000] SAO PAULO | [1100] RIO JANEIRO | [1200] BRASILIA | [1300] MACEIO');
var numeroVoo = readlineSync.question("Informe o numero do voo: ");
var data = lerData();
// Verifica se a data informada é anterior à data atual
var dataAtual = new Date();
if (dataInformada < dataAtual) {
    console.log("Data informada é anterior à data atual. Por favor, informe uma data válida.");
}
else {
    return dataInformada;
}
var voo = new Voo(numeroVoo, data);
/* Opção 1: Mostra a próxima cadeira livre.
Opção 2: Solicita ao usuário um número de cadeira e tenta ocupar a cadeira.
Opção 3: Solicita ao usuário um número de cadeira e verifica se a cadeira está ocupada.
Opção 4: Mostra o número de vagas disponíveis.
Opção 5: Mostra as informações do voo (número do voo e data).
Opção 6: Encerra o programa.
*/
function mostrarMenu() {
    console.log("\nMenu:");
    console.log("[1] Proxima cadeira livre");
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
            var cadeiraParaOcupar = readlineSync.questionInt("Informe nomero da cadeira para ocupar [1-100]: ");
            if (voo.ocupa(cadeiraParaOcupar)) {
                console.log("Cadeira ".concat(cadeiraParaOcupar, " ocupada com sucesso."));
            }
            else {
                console.log("Cadeira ".concat(cadeiraParaOcupar, " ja esta ocupada ou namero invalido."));
            }
            break;
        case 3:
            var cadeiraParaVerificar = readlineSync.questionInt("Informe numero da cadeira para verificar [1-100]: ");
            if (voo.verifica(cadeiraParaVerificar)) {
                console.log("Cadeira ".concat(cadeiraParaVerificar, " esta ocupada."));
            }
            else {
                console.log("Cadeira ".concat(cadeiraParaVerificar, " esta livre."));
                break;
            }
            break;
        case 4:
            console.log("Numero de vagas disponaveis: ".concat(voo.vagas()));
            break;
        case 5:
            console.log("Numero do voo: ".concat(voo.getVoo()));
            console.log("Data do voo: ".concat(voo.getData()));
            break;
        case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Opcao invalida. Escolha uma opcao valida.");
            break;
    }
}
