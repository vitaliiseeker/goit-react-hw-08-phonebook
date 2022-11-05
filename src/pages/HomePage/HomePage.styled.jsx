import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  padding: 20px;
  max-width: 800px;
`;

export const Welcome = styled.h2`
  margin: 15px;
  font-size: 26px;
  padding: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
`;

export const LinkGoit = styled.a`
  margin-left: 8px;
  padding: 3px 5px;

  font-size: 20px;
  font-weight: 500;

  background-color:  #a5b1d3;
  border-radius: 10px;
  transition-property: color, background-color;
  transition: var(--animation);

  &:hover,
  &:focus{
    color: #0000ff;
    background-color: #ffff53;
 }
`;

export const LinkNav = styled(NavLink)`
  margin-left: 8px;
  padding: 3px 5px;

  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  
  background-color: #a5b1d3;
  border-radius: 10px;

  transition-property: color, background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    color: #0000ff;
    background-color: #ffff53;
  }
`;