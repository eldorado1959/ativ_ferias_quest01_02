"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Classe que representa o gabarito da prova
var Gabarito = /** @class */ (function () {
    function Gabarito(respostas) {
        if (respostas.length !== 15) {
            throw new Error('O gabarito deve conter 15 respostas.');
        }
        this.respostas = respostas;
    }
    Gabarito.prototype.getResposta = function (index) {
        return this.respostas[index];
    };
    return Gabarito;
}());
// Classe que representa a prova do aluno
var Prova = /** @class */ (function () {
    function Prova(gabarito) {
        this.gabarito = gabarito;
        this.respostasAluno = new Array(15).fill('');
    }
    // Método para registrar a resposta do aluno para uma questão
    Prova.prototype.respostaAluno = function (resposta) {
        for (var i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === '') {
                this.respostasAluno[i] = resposta.toUpperCase();
                return;
            }
        }
        throw new Error('Todas as questoes já foram respondidas.');
    };
    // Método para calcular o número de acertos do aluno
    Prova.prototype.acertos = function () {
        var acertos = 0;
        for (var i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.getResposta(i)) {
                acertos++;
            }
        }
        return acertos;
    };
    // Método para calcular a nota do aluno
    Prova.prototype.nota = function () {
        var nota = 0;
        for (var i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.getResposta(i)) {
                if (i < 10) {
                    nota += 0.5;
                }
                else {
                    nota += 1;
                }
            }
        }
        return nota;
    };
    // Método para comparar a nota com outra prova
    Prova.prototype.maior = function (outraProva) {
        var minhaNota = this.nota();
        var outraNota = outraProva.nota();
        if (minhaNota > outraNota) {
            return 1;
        }
        else if (minhaNota < outraNota) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return Prova;
}());
// Função principal para executar o programa
function main() {
    var gabaritoRespostas = [
        'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E',
        'A', 'B', 'C', 'D', 'E'
    ];
    var gabarito = new Gabarito(gabaritoRespostas);
    var prova = new Prova(gabarito);
    console.log('Digite as respostas do aluno (A, B, C, D, E):');
    for (var i = 0; i < 15; i++) {
        var resposta = void 0;
        do {
            resposta = readlineSync.question("Questao ".concat(i + 1, ": ")).toUpperCase();
        } while (!['A', 'B', 'C', 'D', 'E'].includes(resposta));
        prova.respostaAluno(resposta);
    }
    console.log("Numero de acertos: ".concat(prova.acertos()));
    console.log("Nota final: ".concat(prova.nota()));
}
// Executa a função principal
main();
