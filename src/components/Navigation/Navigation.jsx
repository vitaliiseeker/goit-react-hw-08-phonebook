import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Nav, List, Item, LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Nav>
        <List>

          <Item>
            <LinkNav to="/" end>Home</LinkNav>
          </Item>

          {isLoggedIn && (
            <Item>
              <LinkNav to="contacts">Contacts</LinkNav>
            </Item>)}

        </List>
      </Nav>
    </>
  );
};
