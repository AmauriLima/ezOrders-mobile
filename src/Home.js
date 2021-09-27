import React from 'react';

import { Container, Logo, NewOrderContainer } from './styles';

import { Orders, Button, Modal } from './components';

import logo from './images/Logo.png';

export default function Home() {
  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />

      <Orders />

      <NewOrderContainer>
        <Button>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>

      <Modal />
    </Container>
  );
}
