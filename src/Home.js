import React, { useState } from 'react';

import { Container, Logo, NewOrderContainer } from './styles';

import { Orders, Button } from './components';
import Modal from './components/Modal';

import logo from './images/Logo.png';

export default function Home() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  function handleToggleModal() {
    setIsModalOpened((prevState) => !prevState);
  }

  return (
    <Container>
      <Logo source={logo} resizeMode="contain" />

      <Orders />

      <NewOrderContainer>
        <Button onPress={handleToggleModal}>
          <Button.Label>Novo Pedido</Button.Label>
        </Button>
      </NewOrderContainer>

      <Modal
        visible={isModalOpened}
        onClose={handleToggleModal}
      />
    </Container>
  );
}
