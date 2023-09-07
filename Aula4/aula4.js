var _ = require('lodash');

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

const readline = require('readline');
const listaFilmes = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function iniciarMenu(){
    console.log('\n1 - Adicionar novo filme');
    console.log('2 - Marcar filme como assistido');
    console.log('3 - Avaliar um filme');
    console.log('4 - Exibir lista de filmes');
    console.log('5 - Sair do programa');

    rl.question('Escolha uma das opções: ', (entrada) => {
        
        switch (entrada) {
            case '1':
                
                rl.question('Entre com o titulo do filme: ', (titulo) => {
                    rl.question('Entre com a data de lançamento: ', (data) => {
                        rl.question('Entre com o gênero: ', (genero) => {
                            rl.question('Entre com a duração do filme: ', (duracao) => {
                                const filme = new Filme (titulo,data,genero,duracao);
                                listaFilmes.push(filme)
                                console.log('Filme adicionado a lista!');
                                iniciarMenu()
                            });
                        });
                    });
                });
                break;
    
            case '2':              
                rl.question('Entre com o titulo do filme: ', function(tituloIN) {
                    let filme = _.find(listaFilmes, {titulo: tituloIN}); 
                    if (filme === undefined || filme === null) {
                        console.log("Filme não consta na lista.");
                    } else {
                        filme.marcarAssistido()
                    }
                    iniciarMenu()
                });
                break;
            
            case '3':            
                rl.question('Entre com o titulo do filme: ', function(tituloIN) {
                    rl.question('Entre com a nota: ', function(nota) {

                        let filme = _.find(listaFilmes, {titulo: tituloIN}); 
                        if (filme === undefined || filme === null) {
                            console.log("Filme não consta na lista.");
                        } else {
                            filme.avaliarFilme(nota)
                        }

                        iniciarMenu()
                    });
                });
                break;
    
            case '4':
                console.log(listaFilmes);
                iniciarMenu()
                break;
    
            case '5':
                console.log('Saindo do menu.');
                rl.close();
                break;
            
            default:
              console.log('Opção inválida.');
              iniciarMenu()
              break;
        }
    });

}

iniciarMenu()
