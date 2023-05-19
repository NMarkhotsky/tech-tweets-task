import styled from 'styled-components';

export const Main = styled.div``;

export const DropDownContainer = styled.div`
  width: 140px;
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

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: #461ca9a8;

  z-index: 999;

  &:first-child {
    padding-top: 0.8em;
  }

  &:last-child {
    padding-bottom: 0.8em;
  }

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const ListItem = styled.li`
  padding: 15px;

  :hover {
    background-color: #6165c881;
  }
  cursor: pointer;

  transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;
