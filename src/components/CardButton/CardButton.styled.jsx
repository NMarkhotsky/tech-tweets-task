import styled from 'styled-components';

export const Button = styled.button`
  padding: 14px 39px;
  min-width: 196px;

  background-color: ${props => (props.value ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
`;
