import styled from 'styled-components';

export const Item = styled.li`
  width: 500px;
  font-size: 20px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Name = styled.p`
  margin: 0;
`;
