import { Link as NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  width: 140px;

  border-radius: 10px;

  color: #ffffff;
  background-color: #471ca9a8;

  :hover {
    background-color: #6165c881;
  }
`;
