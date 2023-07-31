import styled from 'styled-components';
import liginBackground from '../../images/login.png';
import flame from '../../images/flame.png';

export const Background = styled.div`
  background-image: url(${liginBackground}), url(${flame});
  background-repeat: no-repeat, no-repeat;
  background-position: right 0px bottom 0px, left 0px top;
  background-size: 90%;
  @media screen and (min-width: 768px) {
    background-size: 60%;
  }
  @media screen and (min-width: 1280px) {
    background-size: 50%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  padding: 0 15px;
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const FormWrapper = styled.form`
  padding-top: 150px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`;
