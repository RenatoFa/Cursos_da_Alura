import React from 'react'

const semValidacaoo = (dados) => {
  console.log(dados)
  return { valido: true, texto: '' }
}
const ValidacoesCadastro = React.createContext(
  { cpf: semValidacaoo, senha: semValidacaoo, nome: semValidacaoo }
);


export default ValidacoesCadastro