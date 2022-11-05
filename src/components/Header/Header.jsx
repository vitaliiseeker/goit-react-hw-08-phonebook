import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Header = () => {
  const token = useSelector(selectToken);

  return (

    <header>
      <Container>
        <Navigation />
        {token ? <UserMenu /> : <AuthMenu />}
      </Container>
    </header>
  );
};
