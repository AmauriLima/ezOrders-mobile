import React from 'react';
import { Modal as RNModal } from 'react-native';
import { Container } from './styles';

export default function Modal() {
  return (
    <RNModal
      visible
      transparent={false}
      animationType="slide"
    >
      <Container />
    </RNModal>
  );
}
