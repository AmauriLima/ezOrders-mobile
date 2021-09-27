import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};
`;

export const Logo = styled.Image`
  margin-top: 32px;
`;

export const NewOrderContainer = styled.View`
  background: #fff;
  height: 90px;
  width: 100%;
  elevation: 10;
  position: absolute;
  bottom: 0;
  padding: 0 24px;
  justify-content: center;
`;
