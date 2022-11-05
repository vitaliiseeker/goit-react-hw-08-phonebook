import styled from 'styled-components';

export const Div = styled.div`
  position: relative;

  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 320px;
  width: 100%;

@media screen and (min-width: 480px) {
  width: 480px;
}

@media screen and (min-width: 768px){
  width: 768px;
}

@media screen and (min-width: 1200px) {
  width: 1200px;
}
`; 