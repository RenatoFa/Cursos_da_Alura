import React, { Component } from "react";
import { validarCPF, validarSenha } from './models/cadastro'
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./App.css";
import 'fontsource-roboto';

import { Container, Typography } from "@material-ui/core"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{ cpf: validarCPF, senha: validarSenha }} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;