import React from 'react';
import PropTypes from 'prop-types';

import './Container.jsx';
import { Div } from "./Container.styled"

export const Container = ({ children }) => <Div>{children}</Div>;

Container.protoTypes = {
  children: PropTypes.node.isRequired,
}
