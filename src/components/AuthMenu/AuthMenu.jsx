import { Wrap, List, Item, LinkNav, } from './AuthMenu.styled';

export const AuthMenu = () => {

  return (

    <Wrap>

      <List>
        <Item>
          <LinkNav to="login">LOGIN</LinkNav>
        </Item>

        <Item>
          <LinkNav to="register">REGISTER</LinkNav>
        </Item>
      </List>

    </Wrap>
  );
};
