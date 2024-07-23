var Data_Calendario = /** @class */ (function () {
    // Construtor que inicializa os atributos dia, mês e ano
    function Data_Calendario(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    // Método que compara a data atual com outra data
    Data_Calendario.prototype.compara = function (outraData) {
        if (this.ano > outraData.getAno() ||
            (this.ano === outraData.getAno() && this.mes > outraData.getMes()) ||
            (this.ano === outraData.getAno() && this.mes === outraData.getMes() && this.dia > outraData.getDia())) {
            return 1; // Retorna 1 se a data atual for posterior a outraData
        }
        else if (this.ano === outraData.getAno() &&
            this.mes === outraData.getMes() &&
            this.dia === outraData.getDia()) {
            return 0; // Retorna 0 se as datas forem iguais
        }
        else {
            return -1; // Retorna -1 se a data atual for anterior a outraData
        }
    };
    // Método que retorna o dia da data
    Data_Calendario.prototype.getDia = function () {
        return this.dia;
    };
    // Método que retorna o mês da data
    Data_Calendario.prototype.getMes = function () {
        return this.mes;
    };
    // Método que retorna o mês da data por extenso
    Data_Calendario.prototype.getMesExtenso = function () {
        var meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        return meses[this.mes - 1]; // Retorna o nome do mês correspondente
    };
    // Método que retorna o ano da data
    Data_Calendario.prototype.getAno = function () {
        return this.ano;
    };
    // Método que verifica se o ano é bissexto
    Data_Calendario.prototype.isBissexto = function () {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    };
    // Método que cria um clone da data atual
    Data_Calendario.prototype.clone = function () {
        return new Data_Calendario(this.dia, this.mes, this.ano);
    };
    return Data_Calendario;
}());
// Exemplo de uso da classe Data_Calendario
var data1 = new Data_Calendario(12, 7, 2023);
var data2 = new Data_Calendario(1, 1, 2024);
console.log("Data 1: ".concat(data1.getDia(), "/").concat(data1.getMes(), "/").concat(data1.getAno())); // Imprime Data 1: 12/7/2023
console.log("Data 2: ".concat(data2.getDia(), "/").concat(data2.getMes(), "/").concat(data2.getAno())); // Imprime Data 2: 1/1/2024
console.log("Compara\u00E7\u00E3o: ".concat(data1.compara(data2))); // Deve retornar -1, pois data1 é anterior a data2
console.log("M\u00EAs de Data 1: ".concat(data1.getMesExtenso())); // Imprime Mês de Data 1: Julho
console.log("Ano de Data 2 \u00E9 bissexto? ".concat(data2.isBissexto())); // Imprime Ano de Data 2 é bissexto? true
console.log("Clone de Data 1: ".concat(data1.clone().getDia(), "/").concat(data1.clone().getMes(), "/").concat(data1.clone().getAno())); // Imprime Clone de Data 1: 12/7/2023
