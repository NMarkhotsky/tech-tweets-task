import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #ffffff;

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;

  &.active {
    background-color: #471ca9a8;
  }
`;
