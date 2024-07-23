//Questão 1 - Notas e Médias Mágicas
//Escreva uma classe detalhada objetos representam alunos matriculados em uma disciplina mágica. Cada objeto da aula deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes métodos para esta classe:


class Aluno {
    matricula: number;
    nome: string;
    notaProva1: number;
    notaProva2: number;
    notaTrabalho: number;

    constructor(
        matricula: number,
        nome: string,
        notaProva1: number,
        notaProva2: number,
        notaTrabalho: number) 
        {
        this.matricula = matricula;
        this.nome = nome;
        this.notaProva1 = notaProva1;
        this.notaProva2 = notaProva2;
        this.notaTrabalho = notaTrabalho;
    }

    media(): number {
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho) / 3;
    }

    final(): number {
        let mediaFinal = this.media();
        if (mediaFinal >= 7) {
            console.log("Aprovado!! ");
            return mediaFinal;
        } else {
            // Aqui você pode adicionar a lógica específica para o cálculo da nota final se a média não for suficiente
            return mediaFinal; // Neste exemplo, estamos retornando a média diretamente
        }
    }
}

export { Aluno };
