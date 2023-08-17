class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = false;
        this.avaliacao = 0;
    }

    exibirDetalhes(){
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Duração: ${this.duracao}`);
        console.log(`Assistido: ${this.assistido}`);
        console.log(`Avaliação: ${this.avaliacao}`);
    }

    marcarAssistido(){
        this.assistido = true;
        console.log(`Filme assistido!`);
    }

    avaliarFilme(nota){
        this.avaliacao = nota
        console.log(`Filme ${this.titulo} avaliado em ${this.avaliacao}.`);
    }
}

const filme1 = new Filme ('Interestelar',2014,'Ficção','2h 49m');
const filme2 = new Filme ('A Chegada', 2016,'Ficção','1h 56m');
const filme3 = new Filme ('Gladiador', 2000,'Ação','2h 35m');

filme2.marcarAssistido();
filme2.avaliarFilme(10);

filme3.marcarAssistido();
filme3.avaliarFilme(9);

filme1.exibirDetalhes()
filme2.exibirDetalhes()

