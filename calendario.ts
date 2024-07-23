class Data_Calendario {
    private dia: number;
    private mes: number;
    private ano: number;

    // Construtor que inicializa os atributos dia, mês e ano
    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    // Método que compara a data atual com outra data
    compara(outraData: Data_Calendario): number {
        if (this.ano > outraData.getAno() || 
            (this.ano === outraData.getAno() && this.mes > outraData.getMes()) || 
            (this.ano === outraData.getAno() && this.mes === outraData.getMes() && this.dia > outraData.getDia())) {
            return 1; // Retorna 1 se a data atual for posterior a outraData
        } else if (this.ano === outraData.getAno() && 
                   this.mes === outraData.getMes() && 
                   this.dia === outraData.getDia()) {
            return 0; // Retorna 0 se as datas forem iguais
        } else {
            return -1; // Retorna -1 se a data atual for anterior a outraData
        }
    }

    // Método que retorna o dia da data
    getDia(): number {
        return this.dia;
    }

    // Método que retorna o mês da data
    getMes(): number {
        return this.mes;
    }

    // Método que retorna o mês da data por extenso
    getMesExtenso(): string {
        const meses: string[] = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1]; // Retorna o nome do mês correspondente
    }

    // Método que retorna o ano da data
    getAno(): number {
        return this.ano;
    }

    // Método que verifica se o ano é bissexto
    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    }

    // Método que cria um clone da data atual
    clone(): Data_Calendario {
        return new Data_Calendario(this.dia, this.mes, this.ano);
    }
}

// Exemplo de uso da classe Data_Calendario
const data1 = new Data_Calendario(12, 7, 2023);
const data2 = new Data_Calendario(1, 1, 2024);

console.log(`Data 1: ${data1.getDia()}/${data1.getMes()}/${data1.getAno()}`); // Imprime Data 1: 12/7/2023
console.log(`Data 2: ${data2.getDia()}/${data2.getMes()}/${data2.getAno()}`); // Imprime Data 2: 1/1/2024
console.log(`Comparação: ${data1.compara(data2)}`); // Deve retornar -1, pois data1 é anterior a data2
console.log(`Mês de Data 1: ${data1.getMesExtenso()}`); // Imprime Mês de Data 1: Julho
console.log(`Ano de Data 2 é bissexto? ${data2.isBissexto()}`); // Imprime Ano de Data 2 é bissexto? true
console.log(`Clone de Data 1: ${data1.clone().getDia()}/${data1.clone().getMes()}/${data1.clone().getAno()}`); // Imprime Clone de Data 1: 12/7/2023
