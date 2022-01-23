import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const DadosUsuario = ({ aoEnviar }) => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar({ email, senha })
    }}>
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value)
        }}
        id='email'
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
        label='senha'
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