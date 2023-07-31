import styled from 'styled-components';

export const List = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-top: 25px;
  margin-bottom: 25px;

  /* overflow-y: scroll;
  max-height: 250px; */

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;
