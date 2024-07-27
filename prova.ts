import * as readlineSync from 'readline-sync';

// Classe que representa o gabarito da prova
class Gabarito {
    private respostas: string[];

    constructor(respostas: string[]) {
        if (respostas.length !== 15) {
            throw new Error('O gabarito deve conter 15 respostas.');
        }
        this.respostas = respostas;
    }

    public getResposta(index: number): string {
        return this.respostas[index];
    }
}

// Classe que representa a prova do aluno
class Prova {
    private gabarito: Gabarito;
    private respostasAluno: string[];

    constructor(gabarito: Gabarito) {
        this.gabarito = gabarito;
        this.respostasAluno = new Array(15).fill('');
    }

    // Método para registrar a resposta do aluno para uma questão
    public respostaAluno(resposta: string): void {
        for (let i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === '') {
                this.respostasAluno[i] = resposta.toUpperCase();
                return;
            }
        }
        throw new Error('Todas as questoes já foram respondidas.');
    }

    // Método para calcular o número de acertos do aluno
    public acertos(): number {
        let acertos = 0;
        for (let i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.getResposta(i)) {
                acertos++;
            }
        }
        return acertos;
    }

    // Método para calcular a nota do aluno
    public nota(): number {
        let nota = 0;
        for (let i = 0; i < this.respostasAluno.length; i++) {
            if (this.respostasAluno[i] === this.gabarito.getResposta(i)) {
                if (i < 10) {
                    nota += 0.5;
                } else {
                    nota += 1;
                }
            }
        }
        return nota;
    }

    // Método para comparar a nota com outra prova
    public maior(outraProva: Prova): number {
        const minhaNota = this.nota();
        const outraNota = outraProva.nota();
        if (minhaNota > outraNota) {
            return 1;
        } else if (minhaNota < outraNota) {
            return -1;
        } else {
            return 0;
        }
    }
}
// Função para limpar a tela
function limparTela(): void {
    console.clear();
}

// Função principal para executar o programa
function main() {
    limparTela()
    const gabaritoRespostas = [
        'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E',
        'A', 'B', 'C', 'D', 'E'
    ];
    const gabarito = new Gabarito(gabaritoRespostas);
    const prova = new Prova(gabarito);

    console.log('Digite as respostas do aluno (A, B, C, D, E):');
    for (let i = 0; i < 15; i++) {
        let resposta: string;
        do {
            resposta = readlineSync.question(`Questao ${i + 1}: `).toUpperCase();
        } while (!['A', 'B', 'C', 'D', 'E'].includes(resposta));

        prova.respostaAluno(resposta);
    }

    console.log(`Numero de acertos: ${prova.acertos()}`);
    console.log(`Nota final: ${prova.nota()}`);
}

// Executa a função principal
main();
