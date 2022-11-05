import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Nav, List, Item, LinkNav } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Nav>
        <List>
          <Item>
            <LinkNav to="/" end>Home</LinkNav>
          </Item>
          {token && (
            <Item>
              <LinkNav to="contacts">Phonebook</LinkNav>
            </Item>)}
          <Item>
            <LinkNav to="about">About</LinkNav>
          </Item>
        </List>
      </Nav>
    </>
  );
};
