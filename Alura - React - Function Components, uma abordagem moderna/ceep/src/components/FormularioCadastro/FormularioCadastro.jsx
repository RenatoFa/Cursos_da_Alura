import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [nome, setNome] = useState("Daniela");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState(
    {
      cpf: {
        valido: true, texto: ""
      }
    }
  )

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
    }}>

      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
        }}
        id="nome" label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        onChange={(event) => {
          setCpf(event.target.value)
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value)
          setErros({
            cpf: {
              valido: ehValido.valido,
              texto: ehValido.texto,
            }
          })
        }}
        erros={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="Cpf"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        checked={promocoes}
        label="Promoções"
        control={<Switch onChange={(event) => {
          setPromocoes(event.target.checked)
        }} name="promoções" />}
      />

      <FormControlLabel
        checked={novidades}
        label="Novidades"
        control={<Switch onChange={(event) => {
          setNovidades(event.target.checked)
        }} name="novidades" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro;