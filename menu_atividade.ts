import { Aluno } from './Aluno';
import * as readlineSync from 'readline-sync';

function main() {
    let matricula = Number(readlineSync.question('Digite a matricula do aluno: '));
    let nome = readlineSync.question('Digite o nome do aluno: ');
    let notaProva1 = Number(readlineSync.question('Digite a nota da primeira prova: '));
    let notaProva2 = Number(readlineSync.question('Digite a nota da segunda prova: '));
    let notaTrabalho = Number(readlineSync.question('Digite a nota do trabalho: '));

    let aluno = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho);

    console.log(`A média do aluno ${aluno.nome} é: ${aluno.media()}`);
    console.log(`A nota final do aluno ${aluno.nome} é: ${aluno.final()}`);
}

main();


