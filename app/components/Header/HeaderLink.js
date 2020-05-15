import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(Link)`
  display: inline-flex;
  width: 100%;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'archiaregular', sans-serif;
  font-size: 50pt;
  padding: 0px 0px 0px 20px;
  color: white;

  &:hover {
    background: #ec184a;
    height: 256px;
  }

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export const SmallLink = styled(Link)`
  width: 100%;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'archiaregular', sans-serif;
  font-size: 24pt;
  padding: 0px 0px 0px 20px;
  color: white;

  &:hover {
    background: #ec184a;
  }

  &:active {
    background: #41addd;
    color: #fff;
  }
`;
