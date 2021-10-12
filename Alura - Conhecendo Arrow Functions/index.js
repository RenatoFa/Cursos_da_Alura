class ModuloDeImpressao {
  constructor() {
    this._codigo = 10;
  }
  imprime(nomes) {
    nomes.forEach(nome => { console.log(`${this._codigo}: ${nome}`) });
  }
}

const professores = ['Elias', 'Yuri', 'Gabriel', 'Guilherme', "Yan"]
const novaImpressao = new ModuloDeImpressao
novaImpressao.imprime(professores)

class ModuloDeImpressao {
  constructor() {
    this._codigo = 10;
  }
  imprime(nomes) {
    nomes.forEach(function (nome) {
      console.log(`${this._codigo}: ${nome}`);
    }.bind(this));
  }
}

// O JavaScript está nos dizendo que this._codigo é undefined, ou seja, não tem nenhum valor atribuído a ele.
// Isso ocorre porque o this dentro de uma função tem um comportamento dinâmico, isto é, variando de acordo
// com o contexto de execução.

// Arrow Function

// A versão do ECMA Script 2015 do JavaScript, trouxe uma nova forma mais sucinta de trabalhar
// com funções chamada de Arrow Functions, por causa da sintaxe que lembra uma flecha: () =>.

// Mas a Arrow Function não é só uma maneira menos verbosa de escrever uma função, ela tem uma característica
// em particular que vai nos auxiliar em nosso problema: o escopo léxico.Mas como assim o escopo léxico ?

//   Escopo Léxico
// Escopo léxico, significa que podemos acessar a propriedade código dentro do nosso forEach.
// O this não irá variar de acordo com o contexto.Agora, como o contexto do this._codigo é o
// da classe MóduloDeImpressão temos acesso a propriedade

// Podemos utilizar o bind: Como podemos ver, o bind vai passar um contexto para um função que não é dela, ou seja,
// o this._codigo dentro do forEach vai ter o contexto da classe ModuloDeImpressao