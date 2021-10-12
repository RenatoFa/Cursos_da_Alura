const apiUrl = ' http://localhost:3000/clientes'
const clientes = [{ nome: 'teste', cpf: '000000000-00' }]
const listaClientes = document.querySelector('#clientes')

fetch(apiUrl) // assicrono
  .then(dados => dados.json())
  .then(resposta => {
    resposta.forEach(cliente => {
      listaClientes.innerHTML += (`<li>nome:${cliente.nome} cpf:${cliente.cpf}</li>`)
    })
  })
  .catch(error => listaClientes.innerHTML = `<p>error</p>`)






