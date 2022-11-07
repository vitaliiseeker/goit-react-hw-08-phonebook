import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  /* bottom: 10px;  */
  right: 20px;

  display: flex;
  align-items: center;
  gap: 8px;

   @media screen and (min-width: 767px) { 
    /* top: 0; */
    bottom: 10px;
  }
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
  padding: 5px 10px;

  background-color: transparent;
  border: none;
  border-radius: 30%;

  cursor: pointer;
  outline: none;

  transition-property: fill, background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    /* background-color: #0000ff; */
    fill: #0000ff;
  }
`;
