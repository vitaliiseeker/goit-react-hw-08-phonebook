import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;

min-width: 200px;
width: 600px;
padding: 20px;

border: 1px solid #808080;
border-radius: 6px;
`;

export const Label = styled.label`
font-size: 16px; 
`;

export const Input = styled.input`
padding: 4px;
font-size: 16px;
max-width: 250px;

`;