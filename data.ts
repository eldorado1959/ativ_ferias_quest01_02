//Questão 2 - Calendário Mágico
//Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta classe deverá dispor dos seguintes métodos:



class Data {
    private dia: number;
    private mes: number;
    private ano: number;

    constructor(dia: number, mes: number, ano: number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    compara(outraData: Data): number {
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

    getDia(): number {
        return this.dia;
    }

    getMes(): number {
        return this.mes;
    }

    getMesExtenso(): string {
        const meses: string[] = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1]; // Retorna o nome do mês correspondente
    }

    getAno(): number {
        return this.ano;
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    }

    clone(): Data {
        return new Data(this.dia, this.mes, this.ano);
    }
}

// Exemplo de uso
const data1 = new Data(12, 7, 2023);
const data2 = new Data(1, 1, 2024);

console.log(`Data 1: ${data1.getDia()}/${data1.getMes()}/${data1.getAno()}`);
console.log(`Data 2: ${data2.getDia()}/${data2.getMes()}/${data2.getAno()}`);
console.log(`Comparação: ${data1.compara(data2)}`);  // Deve retornar -1, pois data1 é anterior a data2
console.log(`Mês de Data 1: ${data1.getMesExtenso()}`);

export { Data };