import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-block;
  margin-right: 10px;;
  padding: 4px 8px;
  max-width: 200px;

  font-size: 14px;
  color: #000080;
  background-color: #8080c0;

  border: 1px solid #8080c0;
  border-radius: 4px;

  box-shadow: 0px 2px 4px #808080;
  outline: none;
  cursor: pointer;

  transition-property: color, background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    background-color: #0000ff;
    color: #ffff00;
  } 
`;