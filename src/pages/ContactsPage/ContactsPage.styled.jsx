import styled from 'styled-components';

export const Wrap = styled.div`
display: flex;
flex-direction: column-reverse;
gap: 10px;

margin-top: 15px;
padding: 15px;
border: 1px solid #808080;
border-radius: 10px;

@media screen and (min-width: 768px){
 flex-direction: row;

}
`;
