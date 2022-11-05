import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  bottom: 12px;
  right: 40px;
  display: flex;
  gap: 8px;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const Text = styled.p`
  
  `;

export const Name = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-style: italic;

  color: #00009b;

`;

export const BtnLogout = styled.button`
  
  display: inline-block;
  padding: 4px 8px;
  /* max-width: 200px; */

  font-size: inherit;
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
