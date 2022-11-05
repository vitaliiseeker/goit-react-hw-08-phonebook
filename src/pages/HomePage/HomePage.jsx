import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/authSelectors';
import { Wrap, Welcome, Text, LinkGoit, LinkNav } from "./HomePage.styled";

export const HomePage = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Wrap>
        <Welcome>We welcome you to our website!</Welcome>
        <Text>This software product is the result of the final practical task of consolidating the theoretical knowledge acquired during educational the course "React Bootcamp Full Stack Developer"
          <LinkGoit
            href="https://goit.global/ua/courses/bootcamp/"
            target="_blank"
            rel="noopener nofollow noreferrer">  IT School GoIT
          </LinkGoit><br />
          {!token && (
            <>To use the program, you need to
              <LinkNav to="register" title="register">register</LinkNav> <br />
              If you are already
              <LinkNav to="login" title="log in">registered</LinkNav>
            </>)}
        </Text>
      </Wrap>
    </>

  )
};
