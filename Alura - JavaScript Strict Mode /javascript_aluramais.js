// Modo restrito

"use strict"

const ola = () => {
  let nome = "Giovanni"
  console.log("Ola" + nome)
}

ola()

class Aluno {
  get nota() {
    return 6
  }
}

let aluno = new Aluno();

aluno.nota = 10