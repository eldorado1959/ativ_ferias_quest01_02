"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno_1 = require("./Aluno");
var readlineSync = require("readline-sync");
function main() {
    var matricula = Number(readlineSync.question('Digite a matrícula do aluno: '));
    var nome = readlineSync.question('Digite o nome do aluno: ');
    var notaProva1 = Number(readlineSync.question('Digite a nota da primeira prova: '));
    var notaProva2 = Number(readlineSync.question('Digite a nota da segunda prova: '));
    var notaTrabalho = Number(readlineSync.question('Digite a nota do trabalho: '));
    var aluno = new Aluno_1.Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho);
    console.log("A m\u00E9dia do aluno ".concat(aluno.nome, " \u00E9: ").concat(aluno.media()));
    console.log("A nota final do aluno ".concat(aluno.nome, " \u00E9: ").concat(aluno.final()));
}
main();
