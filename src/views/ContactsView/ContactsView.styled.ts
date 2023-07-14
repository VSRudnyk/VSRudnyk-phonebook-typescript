import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 780px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 26px;
  @media screen and (max-width: 779px) {
    text-align: center;
  }
`;

export const ContactListTitle = styled.h2`
  margin-top: 25px;
  margin-bottom: 25px;
`;
