const localhostProfile = `http://localhost:3000/profile`


const listaClientes = () => {
  // promise -
  // const promise = new Promise((resolve, reject) => {

  //   const http = new XMLHttpRequest()

  //   http.open('GET', 'http://localhost:3000/profile')
  //   http.onload = () => {
  //     if (http.status >= 400) {
  //       reject(JSON.parse(http.response))
  //     } else {
  //       resolve(JSON.parse(http.response))
  //     }
  //   }
  //   http.send()
  // })

  // return promise

  return fetch(localhostProfile).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possivel listar os clientes')
  })
  // por padrao a fetch faz um get e retorna uma promise
}

const criaCliente = (nome, email) => {
  return fetch(localhostProfile, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        nome: nome,
        email: email
      }
    )
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.body
    }
    throw new Error('Não foi possivel criar um cliente')
  })
}

const removeCliente = (id) => {
  return fetch(`${localhostProfile}/${id}`, {
    method: 'DELETE'
  }).then(resposta => {
    if (!resposta.ok) {
      throw new Error('Não foi possivel remover um cliente')
    }
  })
}

const detalhaCliente = (id) => {
  return fetch(`${localhostProfile}/${id}`).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possivel detalhar um cliente')
  })
}

const atualizaCliente = (id, nome, email) => {
  return fetch(`${localhostProfile}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    })
  }).then(resposta => {
    if (resposta.ok) {
      return resposta.json()
    }
    throw new Error('Não foi possivel atualizar um cliente')
  })
}

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente
}