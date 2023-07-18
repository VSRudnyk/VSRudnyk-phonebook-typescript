import styled from 'styled-components';

export const Item = styled.li`
  cursor: pointer;
  font-size: 16px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
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
