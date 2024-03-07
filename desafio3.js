// Classe para representar um herói
class Heroi {
    // Construtor para inicializar o herói com nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // Método para o herói atacar
    atacar() {
        // Variável para armazenar o tipo de ataque
        let ataque;
        // Seleciona o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "realizou um ataque";
        }
        // Exibe uma mensagem com o tipo de ataque realizado pelo herói
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Cria instâncias da classe Heroi para personagens do livro "O Hobbit"
const mago = new Heroi("Bilbo Bolseiro", 122, "mago");
const guerreiro = new Heroi("Thorin Escudo de Carvalho", 198, "guerreiro");
const monge = new Heroi("Gandalf", 250, "monge");
const ninja = new Heroi("Legolas", 2931, "ninja");

// Chama o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
