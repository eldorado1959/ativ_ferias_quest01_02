import * as readlineSync from 'readline-sync';

// Classe representando um voo mágico
class Voo implements Voo {
    private numeroVoo: string;
    private data: Date;
    private cadeiras: boolean[];

    // Construtor inicializando número do voo, data e cadeiras (até 100)
    constructor(numeroVoo: string, data: Date) {
        this.numeroVoo = numeroVoo;
        this.data = data;
        this.cadeiras = Array(100).fill(false); // Inicializa todas as cadeiras como desocupadas (false)
    }

    // Retorna o índice da próxima cadeira livre
    proximoLivre(): number {
        for (let i = 0; i < this.cadeiras.length; i++) {
            if (!this.cadeiras[i]) {
                return i + 1; // Retorna o número da cadeira (1 a 100)
            }
        }
        return -1; // Se não houver cadeira livre
    }

    // Verifica se uma cadeira específica está ocupada
    verifica(cadeira: number): boolean {
        return this.cadeiras[cadeira - 1];
    }

    // Ocupa uma cadeira específica se estiver livre
    ocupa(cadeira: number): boolean {
        if (cadeira < 1 || cadeira > 100) {
            throw new Error("Número de cadeira inválido.");
        }
        if (!this.cadeiras[cadeira - 1]) {
            this.cadeiras[cadeira - 1] = true;
            return true;
        }
        return false; // Se a cadeira já estiver ocupada
    }

    // Retorna o número de vagas disponíveis
    vagas(): number {
        return this.cadeiras.filter(cadeira => !cadeira).length;
    }

    // Retorna o número do voo
    getVoo(): string {
        return this.numeroVoo;
    }

    // Retorna a data do voo
    getData(): Date {
        return this.data;
    }

    // Clona o objeto atual, criando uma nova instância com os mesmos valores
    clone(): Voo {
        const novoVoo = new Voo(this.numeroVoo, new Date(this.data));
        novoVoo.cadeiras = [...this.cadeiras];
        return novoVoo;
    }
}

// Função auxiliar para ler data do console
function lerData(): Date {
    console.log('Informe data');
    const dia = readlineSync.questionInt("dia: ");
    const mes = readlineSync.questionInt("mes: ");
    const ano = readlineSync.questionInt("ano: ");
    console.log('Informe horario');
    const hora = readlineSync.questionInt("Informe a hora: ");
    const minuto = readlineSync.questionInt("Informe o minuto: ");
    console.log('data do voo: ' dia, mes, ano);
    //return new Date(ano, mes - 1, dia, hora, minuto);
}

// Exemplo de uso
console.log('[1000] SAO PAULO | [1100] RIO JANEIRO | [1200] BRASILIA | [1300] MACEIO ');
const numeroVoo = readlineSync.question("Informe o numero do voo: ");
const data = lerData();

const voo = new Voo(numeroVoo, data);

console.log(`Número do voo: ${voo.getVoo()}`);
console.log(`Data do voo: ${voo.getData()}`);

console.log(`Próxima cadeira livre: ${voo.proximoLivre()}`);
console.log(`Ocupando cadeira 1: ${voo.ocupa(1)}`);
console.log(`Cadeira 1 ocupada: ${voo.verifica(1)}`);
console.log(`Número de vagas disponíveis: ${voo.vagas()}`);

const vooClone = voo.clone();
console.log(`Número do voo clonado: ${vooClone.getVoo()}`);
console.log(`Data do voo clonado: ${vooClone.getData()}`);
