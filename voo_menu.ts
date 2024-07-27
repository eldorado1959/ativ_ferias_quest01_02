/*Os erros encontrados sao devido a problemas de compatibilidade de versao e
tipos incorretos.

Erro de preenchimento da matriz:

metodo fill esta disponivel em versoes mais recentes do ECMAScript (ES6/ES2015 e posteriores). 
Para resolver isso, garantir que compilador TypeScript esteja configurado para usar uma biblioteca compativel.

Erro de sobrecarga de Date:

Esse erro ocorre porque TypeScript esta tentando usar uma versao de Date de uma biblioteca diferente .

mas o codigo roda normalmente!!!

*/


import * as readlineSync from 'readline-sync';



// Classe representando um voo mágico
class Voo {
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
            throw new Error("Numero de cadeira invalido.");
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
    return new Date(ano, mes - 1, dia, hora, minuto); // O mês é subtraído por 1
    /* A razão pela qual o mês precisa ser subtraído de 1 ao criar um objeto Date em JavaScript
     é devido à forma como o construtor da classe Date funciona.
     Em JavaScript, os meses são indexados de 0 a 11, onde 0 representa janeiro
      e 11 representa dezembro. Isso é um comportamento que vem desde a criação da linguagem*/
}

// Função para limpar a tela
function limparTela(): void {
    console.clear();
}

// Exemplo de uso
limparTela();
console.log('\n                     VOOS DISPONIVEIS');
console.log('\n[1000] SAO PAULO | [1100] RIO JANEIRO | [1200] BRASILIA | [1300] MACEIO');
const numeroVoo = readlineSync.question("Informe o numero do voo: ");
const data = lerData();



const voo = new Voo(numeroVoo, data);


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

let opcao = 0;

while (opcao !== 6) {
    mostrarMenu();
    opcao = readlineSync.questionInt("Opcao: ");
    
    switch (opcao) {
        case 1:
            console.log(`Proxima cadeira livre: ${voo.proximoLivre()}`);
            break;
        case 2:
            const cadeiraParaOcupar = readlineSync.questionInt("Informe nomero da cadeira para ocupar [1-100]: ");
            if (voo.ocupa(cadeiraParaOcupar)) {
                console.log(`Cadeira ${cadeiraParaOcupar} ocupada com sucesso.`);
            } else {
                console.log(`Cadeira ${cadeiraParaOcupar} ja esta ocupada ou namero invalido.`);
            }
            break;
        case 3:
            const cadeiraParaVerificar = readlineSync.questionInt("Informe numero da cadeira para verificar [1-100]: ");
            if (voo.verifica(cadeiraParaVerificar)) {
                console.log(`Cadeira ${cadeiraParaVerificar} esta ocupada.`);
            } else {
                console.log(`Cadeira ${cadeiraParaVerificar} esta livre.`);
              break  
            }
            break;
        case 4:
            console.log(`Numero de vagas disponaveis: ${voo.vagas()}`);
            break;
        case 5:
            console.log(`Numero do voo: ${voo.getVoo()}`);
            console.log(`Data do voo: ${voo.getData()}`);
            break;
        case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Opcao invalida. Escolha uma opcao valida.");
            break;
    }
}
