import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectName } from 'redux/auth/authSelectors';
import { ReactComponent as IconLogout } from "images/icon-logout.svg";
import { Wrap, Inner, Text, Name, BtnLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (

    <Wrap>

      <Inner>
        <Text>welcome</Text>
        <Name>{`${name}`}</Name>
      </Inner>

      <BtnLogout
        type="button"
        onClick={handleClick}
      >
        <IconLogout width="32" height="32" />
      </BtnLogout>

    </Wrap>
  );
};
