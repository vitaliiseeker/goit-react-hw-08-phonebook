import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 15px;

  padding-top: 100px;
  /* max-width: 600px; */
  
  @media screen and (min-width: 768px) { 
    padding: 20px;
    border: 1px solid #808080;
    border-radius: 6px;
  }
`;

export const Label = styled.label`
  font-size: 16px; 
`;

export const Input = styled.input`
  padding: 4px;
  font-size: 16px;
  max-width: 250px;

  @media screen and (min-width: 768px) { 
    max-width: none;
    border: 1px solid #808080;
    border-radius: 6px;
  }
`;