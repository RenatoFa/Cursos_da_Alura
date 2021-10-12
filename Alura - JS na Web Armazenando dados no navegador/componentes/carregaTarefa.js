import { criaData } from "./criaData.js"
import { removeDataRepetidas, ordenaDatas } from "./data.js"

export const carregaTarefa = () => {
  const lista = document.querySelector('[data-list]')

  const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

  lista.innerHTML = " "

  const dataUnicas = removeDataRepetidas(tarefasCadastradas)
  ordenaDatas(dataUnicas)

  dataUnicas.forEach((dia) => {
    lista.appendChild(criaData(dia))
  })
}