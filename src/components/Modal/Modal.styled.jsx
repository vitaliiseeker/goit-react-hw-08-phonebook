import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;


  display: flex;
  justify-content: center;
  align-items: center;

  /* width: 100vw;
  height: 100vh; */
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalStyled = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */

  width: 60vw;
  height: 60vh;
  background-color: rgba(121, 134, 156, 0.8);;
  border-radius: 3px; 
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;