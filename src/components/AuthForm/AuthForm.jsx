import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { register, login } from 'redux/auth/authOperations';
import { nanoid } from "nanoid";
import { Button } from 'components/Button/Button';
import { Wrap, Form, Title, Label, Input } from "./AuthForm.styled";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const AuthForm = ({ type }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isLoginForm, setIsLoginForm] =
    useState(type === "register" ? false : true);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const handleChange = ({ target: { name, value } }) => {

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      isLoginForm ?
        login({ email, password }) :
        register({ name, email, password })
    );

    if (isLoggedIn) {
      Notify.success(`Welcome ${name}, you have successfully ${isLoginForm ? "authorizated" : "registered"}.`);
    };

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <>
      <Wrap>

        <Form onSubmit={handleSubmit}>

          <Title>{isLoginForm ? "Log in" : "Register"}</Title>

          {!isLoginForm &&
            (<>
              <Label htmlFor={nameInputId}>Name:</Label>
              <Input
                type="name"
                name="name"
                id={nameInputId}
                value={name}
                onChange={handleChange}
                placeholder="Enter a name"
                required
              />
            </>)}

          <Label htmlFor={emailInputId}>Email:</Label>
          <Input
            type="email"
            name="email"
            id={emailInputId}
            value={email}
            onChange={handleChange}
            placeholder="Enter a email"
            required
          />

          <Label htmlFor={passwordInputId}>Password:</Label>
          <Input
            type="password"
            name="password"
            id={passwordInputId}
            value={password}
            onChange={handleChange}
            placeholder="Enter a password"
            required
          />
          <Button
            type="submit"
            children={
              isLoginForm ?
                "Login" :
                "Register"}
          />
        </Form>
      </Wrap>
    </>)
}

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
}