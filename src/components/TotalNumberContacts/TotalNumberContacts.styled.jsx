import styled from 'styled-components';

export const Text = styled.p`
margin: 8px 0;
max-width: 400px;
font-style: italic;

@media screen and (min-width: 580px) { 
  max-width: none;
  }
`
export const Total = styled.span`
margin: 0 5px;
font-weight: 500;
`