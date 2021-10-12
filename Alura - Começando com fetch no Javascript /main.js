const btnPesquisarCep = document.querySelector('#btnPesquisar')

btnPesquisarCep.addEventListener("click", (evento) => {
  evento.preventDefault();
  const inputdoCep = document.querySelector('#cep')
  const valorDoCep = inputdoCep.value

  const url = `https://viacep.com.br/ws/${valorDoCep}/json/`
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      if (data.erro) {
        alert("O CEP DIGITADO ESTÁ INVÁLIDO")
        return
      }
      atribuirCampos(data)
    })
})


atribuirCampos = (data) => {
  const rua = document.querySelector('#rua')
  const complemento = document.querySelector("#complemento")
  const bairro = document.querySelector("#bairro")
  const cidade = document.querySelector('#cidade')
  const estado = document.querySelector('#estado')
  console.log(data)
  rua.value = data.logradouro
  complemento.value = data.complemento
  bairro.value = data.bairro
  cidade.value = data.localidade
  estado.value = data.uf
}


// O fetch devolve uma promessa de que algo será retornado, essa promessa é
// chamada de Promisse. Essa promessa pode tanto ser boa, ter retornado os dados,
// quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair.