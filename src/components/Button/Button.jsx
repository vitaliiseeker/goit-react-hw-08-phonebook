import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export const Button = ({ type, children, onClick = () => { } }) => {

  return (<Btn type={type} onClick={onClick} > {children}</Btn>)
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
}




