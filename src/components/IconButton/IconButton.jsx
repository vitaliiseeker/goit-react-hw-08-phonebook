import PropTypes from 'prop-types';
import { IconBtn } from './IconButton.styled';

export const IconButton = ({ type, children, onClick = () => { } }) => {
  return (
    <IconBtn
      type={type}
      onClick={onClick}
    >
      {children}
    </IconBtn>
  );
}

IconButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};



