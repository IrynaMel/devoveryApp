import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 50px;
  margin-right: 30px;
`;

export const HLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #2a363b;
  font-size: 20px;
  &.active {
    color: #d0a686;
    text-decoration: underline;
  }
`;
export const Name = styled.p`
  margin: 0px 20px;
  padding: 12px;
  font-weight: 800;
  font-size: 20px;
`;

export const H = styled.h1`
  text-align: center;
`;
