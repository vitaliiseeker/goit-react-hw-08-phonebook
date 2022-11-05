import {
  Wrap,
  List,
  Item,
  Avatarstyled,
  LinkNav,
} from './AuthMenu.styled';

export const AuthMenu = () => {

  return (
      <List>
        <Item>
          <LinkNav to="login">LOGIN</LinkNav>
        </Item>
        <Item>
          <LinkNav to="register">REGISTER</LinkNav>
        </Item>
      </List>
  );
};
