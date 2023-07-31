import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  font-weight: 500;
  color: #ffffff;
  font-size: 18px;
  &.active {
    color: #2196f3;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  height: 50px;
  align-items: center;

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

export const Nav = styled.nav`
  position: absolute;
  width: 100%;
  box-shadow: 3px 3px 5px 0px rgba(25, 118, 210, 1);
`;
