const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

// Operador spread ...

const numeros = [...numerosPares, ...numerosImpares]

console.log(numeros)

// Destructuring

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

console.log(num1, num2, outrosNumeros)

// Destructuring com padrão

const [nome1 = 'Ju'] = []

console.log(nome1)

// Destructuring com padrão (objeto)

const pessoa = {
  nome: 'Ju',
  idade: 25
}

const pessoaComTelefone = { ...pessoa, telefone: 123123123 }

console.log(pessoa, pessoaComTelefone)

// const nome = pessoa.nome

// ou

const { nome } = pessoa

console.log(nome)

// Destructuring com Função


const imprimeDados = (dados) => {
  // pegar dados especificos de um objeto
  const { nome } = dados
  console.log(nome)
}

imprimeDados(pessoa)

// ou , destructuring direto no parametro

const imprimeDados2 = ({ nome }) => {
  console.log(nome)
}

imprimeDados(pessoa)
