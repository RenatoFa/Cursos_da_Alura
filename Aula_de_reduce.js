
var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
  console.info(`${acumulador} total até o momento`);
  console.log(`${numero} valor atual`);
  console.log(`${indice} indice atual`);
  console.log(`${original} array original`);
  console.log('')
  return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)


const a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10];
var ab = a.reduce((acumulador, elemento) => acumulador += elemento, b.reduce((acumulador, elemento) => acumulador += elemento, 0))
console.log(ab);
console.log('')


animais = [
  {
    nome: 'Fumaça',
    idade: 3,
    tipo: 'cao'
  },
  {
    nome: 'Tobby',
    idade: 6,
    tipo: 'cao'
  },
  {
    nome: 'Laminha',
    idade: 1,
    tipo: 'gato'
  },
  {
    nome: 'Nutella',
    idade: 3,
    tipo: 'cao'
  },
];

// dogsAgeSum = animais.filter((animal) => animal.tipo === 'cao')
//   .map((cao) => cao.idade *= 7)
//   .reduce((total, cao) => total += cao)

// console.log(dogsAgeSum)

dogsAgeSum = animais.reduce((total, elemento) => {
  console.log(total, elemento)
  if (elemento.tipo === 'cao') return total += (elemento.idade *= 7);
  else return total
}, 0);

console.log(dogsAgeSum)
console.log('')


const sons = ["auau", "miau", "cócóricó"]

const sonsHtml = sons.reduce((acc, som) => acc += `<li>${som}</li>`, "");
z
console.log(sonsHtml)


// se a lista for grande, e eu ficar precisando buscar carros a todo momento,
// não vai ser legal ficar iterando pela lista (complexidade O(n), então eu gosto de indexar pra ficar com a complexidade O(1).
// Performaticamente pode salvar a sua vida, se liga:
const lista = [
  { id: 1, nome: "gol" },
  { id: 2, nome: "ferrari" },
  { id: 3, nome: "camaro :)" }
];
const callback = (acumulador, valor) => {
  acumulador[valor.id] = valor.nome
  return acumulador
};
const valorInicial = {};
const carrosIndexadosPorId = lista.reduce(callback, valorInicial);
console.log(carrosIndexadosPorId) //camaro :)