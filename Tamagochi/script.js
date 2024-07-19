class Tamagochi {
  constructor(nome) {
    this.nome = nome;
    this.fome = 50;
    this.felicidade = 50;
    this.energia = 50;
    this.imageContainer = document.getElementById("tamagochiImage");
  }

  alimentar() {
    this.fome = Math.max(0, this.fome - 20);
    this.felicidade = Math.min(100, this.felicidade + 10);
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
    this.fome = Math.max(0, this.fome + 10);
    this.atualizarImagem("pixil-gif-otamanormal.gif", "pixil-gif-fantasmadormi.gif", "dormiu");
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
    document.getElementById('status').innerHTML = `
      Status atual do ${this.nome}: <br>
      Fome: ${this.fome} <br>
      Felicidade: ${this.felicidade} <br>
      Energia: ${this.energia}
    `;
  }
}
