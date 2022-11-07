import {  useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalStyled } from "./Modal.styled";

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ children, closeModal }) => {

  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', closeByEsc);

    return () => {
      window.removeEventListener('keydown', closeByEsc);
    }
  }, [closeModal]);

  const closeByBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return createPortal(
    <>
      <Overlay onClick={closeByBackdrop}>
        <ModalStyled>
          {children}
        </ModalStyled>
      </Overlay>
    </>,
    modalRoot,
  );
}

  Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeModal: PropTypes.func.isRequired,
}