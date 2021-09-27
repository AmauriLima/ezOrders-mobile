import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : 0};

`;
