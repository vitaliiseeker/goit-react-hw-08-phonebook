import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
