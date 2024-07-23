"use strict";
//Questão 1 - Notas e Médias Mágicas
//Escreva uma classe detalhada objetos representam alunos matriculados em uma disciplina mágica. Cada objeto da aula deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
var Aluno = /** @class */ (function () {
    function Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }
    Aluno.prototype.media = function () {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
    };
    Aluno.prototype.final = function () {
        var mediaFinal = this.media();
        if (mediaFinal >= 7) {
            console.log("Aprovado!! ");
            return mediaFinal;
        }
        else {
            // Aqui você pode adicionar a lógica específica para o cálculo da nota final se a média não for suficiente
            return mediaFinal; // Neste exemplo, estamos retornando a média diretamente
        }
    };
    return Aluno;
}());
exports.Aluno = Aluno;
