import styled, { css } from 'styled-components/native';

export const List = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 80,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
}))`
  width: 100%;
`;

const cardStatusVariantes = {
  PREPARING: css`background: #F6A609;`,
  DONE: css`background: #2AC769;`,
};

const cardTextStatusVariantes = {
  PREPARING: css`color: #fff;`,
  DONE: css`color: #fff;`,
};

export const Card = styled.View`
  width: 100%;
  background: #fff;
  height: 55px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 5;
  padding: 0 16px;
  border-radius: 5px;
  margin-bottom: 16px;

  ${({ status }) => cardStatusVariantes[status] || null};
`;

export const TableNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #000;
  ${({ status }) => cardTextStatusVariantes[status] || null};
`;

export const Status = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  ${({ status }) => cardTextStatusVariantes[status] || null};
`;
