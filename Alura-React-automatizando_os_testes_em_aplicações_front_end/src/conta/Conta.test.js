import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';
import Conta from './Conta';
describe('Componente de conta', () => {

  it('Exibir o saldo da conta com formatação monetária', () => {
    render(<Conta saldo={1000} />)

    const saldo = screen.getByTestId('saldo-conta');

    expect(saldo.textContent).toBe('R$ 1000')
  });
  it('Não chama a função de realizar transacao, quando o botão é clicado mas nao tem um valor definido',
    () => {
      const funcaoRealizarTransacao = jest.fn()

      render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

      fireEvent.click(screen.getByText('Realizar operação'))

      expect(funcaoRealizarTransacao).not.toHaveBeenCalled()
    });
  it('Chama a função de realizar transacao, quando o botão é clicado e quando tem um valor definido',
    () => {
      const funcaoRealizarTransacao = jest.fn()

      render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

      const valor = screen.getByTestId('valor')

      fireEvent.change(valor, { target: { value: 10 } })
      fireEvent.click(screen.getByText('Realizar operação'))

      expect(funcaoRealizarTransacao).toHaveBeenCalled()
    });
})