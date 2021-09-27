import styled, { css } from 'styled-components';
import { Button as StyledButton } from '..';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #FFF;
`;

export const Header = styled.View`
  background: #fff;
  width: 100%;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const Logo = styled.Image`
  width: 135px;
`;

export const Form = styled.View`
  background: #fff;
  margin-top: 56px;
  padding: 0 16px;
`;

export const FormGroup = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #0A100D;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  ${({ multiline }) => css`
    height: ${multiline ? '120px' : '55px'};
    padding: ${multiline ? '16px' : '0 16px'};
    text-align-vertical: ${multiline ? 'top' : 'center'};
  `}
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Button = styled(StyledButton)`
  margin-top: 16px;
`;
