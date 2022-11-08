import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken, selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  // const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {/* {token ? <UserMenu /> : <AuthMenu />} */}
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
