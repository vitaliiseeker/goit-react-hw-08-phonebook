import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';

export const MobileMenu = ({ closeMenu }) => {
  const token = useSelector(selectToken);

  return (
    <div>
      <button
        type="button"
        onClick={closeMenu}
      >
        Close
      </button>
      {token ? (
        <>
          <Navigation />
          <UserMenu />
        </>
      ) :
        (<AuthMenu />)}
    </div>
  );
};
