import styled from 'styled-components';

export const Item = styled.li`
  cursor: pointer;
  font-size: 16px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border: 1px solid #c4c4c4;
  box-shadow: 3px 3px 5px 0px rgb(25 118 210);
  &:not(:last-child) {
    margin-bottom: 15px;
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
