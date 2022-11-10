import { Container } from 'components/Container/Container';
import { TextFooter, LinkGitHub, GitHubLogo } from './Footer.styled';

export const Footer = () => {

  return (

    <footer>
      <Container>
        <TextFooter>
          &copy; 2022 ⚡️ All Rights Reserved
          <LinkGitHub
            href="https://github.com/vitaliiseeker/goit-react-hw-08-phonebook/"
            target="_blank"
            rel="noopener nofollow noreferrer">
            <GitHubLogo width="25" height="25" />
          </LinkGitHub>
        </TextFooter>
      </Container>
    </footer>
    
  )
}