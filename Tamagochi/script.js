class Tamagochi {
    constructor(nome) {
        this.nome = nome;
        this.fome = 50;
        this.felicidade = 50;
        this.energia = 50;
        this.saude = 50;
        this.imageContainer = document.getElementById("tamagochiImage");
        this.statusContainer = document.getElementById("status");
        this.fomeBar = document.getElementById('fomeBar');
        this.felicidadeBar = document.getElementById('felicidadeBar');
        this.saudeBar = document.getElementById('saudeBar');
        this.energiaBar = document.getElementById('energiaBar');
        this.atualizarStatus();
        this.iniciarCiclo();
    }

    iniciarCiclo() {
        setInterval(() => {
            this.fome = Math.min(100, this.fome + 2);
            this.felicidade = Math.max(0, this.felicidade - 2);
            this.saude = Math.max(0, this.saude - 3);
            this.energia = Math.max(0, this.energia - 2);
            this.atualizarStatus();
            this.verificarFimDeJogo();
        }, 3500);
    }

    alimentar() {
        this.fome = Math.max(0, this.fome + 10);
        this.felicidade = Math.min(100, this.felicidade + 10);
        this.saude = Math.min(100, this.saude + 10);
        this.atualizarImagem("pixil-gif-otamanormal.gif", "otama-comendo-pixilart.gif", "foi alimentado");
    }

    brincar() {
        this.felicidade = Math.min(100, this.felicidade + 20);
        this.energia = Math.max(0, this.energia - 10);
        this.fome = Math.max(0, this.fome - 10);
        this.atualizarImagem("pixil-gif-otamanormal.gif", "pixilart-brincando.gif", "brincou");
    }

    dormir() {
        this.energia = Math.min(100, this.energia + 30);
        this.fome = Math.max(0, this.fome - 5);
        this.atualizarImagem("pixil-gif-otamanormal.gif", "pixil-gif-fantasmadormi.gif", "dormiu");
    }

    cuidar() {
        this.saude = Math.min(100, this.saude + 30);
        this.felicidade = Math.min(100, this.felicidade + 5);
        this.fome = Math.max(0, this.fome - 2);
        this.atualizarImagem("pixil-gif-otamanormal.gif", "otamacomsaude.gif.gif", "foi cuidado");
    }

    atualizarImagem(imagemNormal, imagemAcao, acao) {
        this.mostrarStatus();
        alert(`${this.nome} ${acao}`);
        const images = [imagemNormal, imagemAcao];
        let currentIndex = 0;
        this.imageContainer.src = images[++currentIndex % images.length];
        setTimeout(() => {
            this.imageContainer.src = imagemNormal;
        }, 3500);
    }

    mostrarStatus() {
        this.statusContainer.innerHTML = `
            Status atual do ${this.nome}: <br>
            Fome: ${this.fome} <br>
            Felicidade: ${this.felicidade} <br>
            Energia: ${this.energia} <br>
            Saúde: ${this.saude}
        `;
    }

    atualizarStatus() {
        this.fomeBar.value = this.fome;
        this.felicidadeBar.value = this.felicidade;
        this.saudeBar.value = this.saude;
        this.energiaBar.value = this.energia;
        this.mostrarStatus();
    }

    verificarFimDeJogo() {
        if (this.fome >= 100 || this.felicidade <= 0 || this.saude <= 0){
            alert("Fim de jogo! Seu Tamagochi não está mais saudável.");
            this.imagem = "otama-comendo-pixilart.gif"; 
            location.reload();
        }
    }
}

const tamagochi = new Tamagochi("Otama");

