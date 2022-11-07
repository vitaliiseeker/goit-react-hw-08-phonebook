import styled from 'styled-components';

export const Wrap = styled.div`
display: flex;
justify-content: center;
align-items: center;

height: 70vh;
`; 

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;

padding: 20px;
min-width: 250px;
max-width: 600px;

border: 1px solid #808080;
border-radius: 6px;
`;

export const Title = styled.h3`
text-align: center;
`;

export const Label = styled.label`
font-size: 16px; 
`;

export const Input = styled.input`
padding: 4px;
font-size: 16px;
`;