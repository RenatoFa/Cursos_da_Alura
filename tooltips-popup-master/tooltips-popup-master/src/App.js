import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ToolTip, Modal } from './components';
import Tool from './components/tool/index';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans", sans-serif;
  }
  button {
    margin-bottom: 50px;
  }
`;

export default function App() {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ToolTip label="Ordering in GBP">
        <button type="button">Hover me</button>
      </ToolTip>
      <ToolTip label="Ordering in GBP">
        <button type="button">Hover me</button>
      </ToolTip>
      <Tool text="teste teste teste">
        <h1 style={{ textAlign: 'center' }}>Oi</h1>
      </Tool>
      <Tool text="teste teste teste">
        <h1 style={{ textAlign: 'center', position: 'relative' }}>Oi</h1>
      </Tool>

      <button type="button" onClick={() => setToggleModal(!toggleModal)}>
        Toggle Modal
      </button>

      <Modal toggle={toggleModal} setToggle={setToggleModal}>
        <Modal.Header>👋 Hello, I am a Header</Modal.Header>
        <Modal.Body>
          Suspendisse potenti. Vivamus ipsum erat, consequat ut dui eget,
          vulputate fermentum ex. Donec luctus libero lacus, nec facilisis odio
          convallis eu. Nunc interdum at ex in ultrices. Suspendisse et ultrices
          ipsum. Integer vitae tristique turpis, congue interdum eros. Aliquam
          dignissim posuere velit eu fermentum.
        </Modal.Body>
      </Modal>
    </>
  );
}
