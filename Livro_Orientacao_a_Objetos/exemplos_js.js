// exemplos de classes no javascript
class Personagem {
  constructor(nome, cor, quantidade_de_cogumelos, altura) {
    this.nome = nome;
    this.cor = cor;
    this.quantidade_de_cogumelos = quantidade_de_cogumelos
    this.altura = altura
  }

  getNome() {
    return this.nome
  }
}


let personagem = new Personagem('Aurora', 'Blue', 1, 1.80)

class Quadrilatero {
  calcula_area_do_quadrado(lado) {
    console.log(lado * lado)
  }
  calcula_area_do_retangulo(baseMaior, baseMenor) {
    console.log(baseMaior * baseMenor)
  }
  calcula_area_do_trapezio(baseMaior, baseMenor, altura) {
    console.log((baseMaior * baseMenor * altura) / 2)
  }
  calcula_area_do_losango(diagonalMaior, diagonalMenor) {
    console.log(diagonalMaior * diagonalMenor)
  }
}

quad = new Quadrilatero
quad.calcula_area_do_quadrado(10)
quad.calcula_area_do_retangulo(10, 10)
quad.calcula_area_do_trapezio(10, 10, 10)
quad.calcula_area_do_losango(10, 10)