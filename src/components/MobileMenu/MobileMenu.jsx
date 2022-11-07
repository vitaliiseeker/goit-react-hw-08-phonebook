import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectToken } from 'redux/auth/authSelectors';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { IconButton } from "components/IconButton/IconButton";
import { ReactComponent as IconCloseMenu } from "images/icon-close-menu.svg";
import { Wrap } from "./MobileMenu.styled";

export const MobileMenu = ({ closeMenu }) => {
  const token = useSelector(selectToken);

  return (
    <>
      <IconButton
        type="button"
        onClick={closeMenu}>
        <IconCloseMenu width="32" height="32" />
      </IconButton>

      <Wrap>
        <Navigation onClick={() => closeMenu()} />
        {token ? <UserMenu onClick={() => closeMenu()} /> :
          <AuthMenu onClick={() => closeMenu()} />}
      </Wrap>
    </>
  );
};

MobileMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
}
