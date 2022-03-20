import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const validacoes = useContext(ValidacoesCadastro)

  const [erros, validarCampos, possoEnviar] = useErros(validacoes)

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      if (possoEnviar()) {
        aoEnviar({ email, senha })
      }
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id='email'
        name='email'
        label='email'
        type='email'
        margin='normal'
        required fullWidth />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value)
        }}
        id='senha'
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        label='senha'
        name='senha'
        type='password'
        margin='normal'
        required fullWidth />
      <Button type='submit'
        variant='contained'
        color='primary'>
        Cadastrar</Button>
    </form>
  )
}

export default DadosUsuario