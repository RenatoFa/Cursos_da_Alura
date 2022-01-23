import { StepLabel, Stepper, Typography, Step } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDados] = useState({})

  useEffect(() => {
    if (etapaAtual === (formularios.length - 1)) {
      aoEnviar(dadosColetados)
    }
  })

  const formularios = [<DadosUsuario aoEnviar={coletarDados} validacoes={validacoes} />,
  <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
  <DadosEntrega aoEnviar={coletarDados} validacoes={validacoes} />,
  <Typography variant='h5'>Obrigado pelo Cadastro!</Typography>]


  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados })
    proximaEtapa()
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual + 1)
  }


  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step> <StepLabel>Login</StepLabel> </Step>
        <Step> <StepLabel>Pessoal</StepLabel> </Step>
        <Step> <StepLabel>Entrega</StepLabel> </Step>
        <Step> <StepLabel>Finalizaçâo</StepLabel> </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;