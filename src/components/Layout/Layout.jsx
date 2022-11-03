import { Suspense } from "react";
import { Outlet, NavLink } from 'react-router-dom';
import { Container } from "components/Container/Container";
import { Loader } from "components/Loader/Loader";
import { Nav, List, Item, LinkNav, Footer, GithubLogo, Wrap } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Container>
        <Nav>
          <List>
            <Item>
              <LinkNav to="/" end>Phonebook</LinkNav>
            </Item>
            <Item>
              <LinkNav to="about">About</LinkNav>
            </Item>
          </List>
          <NavLink
            href="https://github.com/vitaliiseeker/goit-react-hw-06-phonebook/"
            target="_blank"
            rel="noopener nofollow noreferrer">
            <GithubLogo width="50" height="50" />
          </NavLink>
        </Nav>
        <Wrap>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Wrap>
        <Footer>
          <p>&copy; 2022 | All Rights Reserved ⚡️</p>
        </Footer>
      </Container>
    </>
  );
};
