const data = new Date()
// O JavaScript possui a classe Date que nos permite trabalhar com datas e horários.

const hoje = new Date()
console.log(hoje.getHours()) // pega a hora

const now = new Date
const tempo = now.getHours()

const conteudo = document.querySelector(".cordefundo")

if (tempo < 16) {
  conteudo.style.background = "#fed02e"
} else {
  conteudo.style.background = '#1000ff'
}

const horas = new Date(5000000000000)
console.log(horas)