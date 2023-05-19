import styled from 'styled-components';

export const Main = styled.div``;

export const DropDownContainer = styled.div`
  width: 140px;
  /* margin: 0 0 0 auto; */
`;

export const DropDownHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;

  border-radius: 10px;

  background-color: #471ca9a8;
  :hover {
    background-color: #6165c881;
  }

  cursor: pointer;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* gap: 15px; */

  border-radius: 10px;

  background-color: #461ca9a8;

  z-index: 999;

  &:first-child {
    padding-top: 0.8em;
  }

  &:last-child {
    padding-bottom: 0.8em;
  }
`;

export const ListItem = styled.li`
  padding: 15px;

  :hover {
    background-color: #6165c881;
  }
  cursor: pointer;
`;
