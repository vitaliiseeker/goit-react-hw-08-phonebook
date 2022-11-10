import styled from 'styled-components';
import { ReactComponent as IconPhone } from "../../images/icon-phone.svg";
import Avatar from "react-avatar";

export const Wrap = styled.div`
  position: relative;

  flex-grow: 1;
  padding: 10px;
  width: 100%;
  border: 1px solid #808080;
  border-radius: 6px;
`;

export const Title = styled.h2`
  padding: 0 30px;
`;

export const BtnCreateContact = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;

  display: inline-block;
  padding: 5px 10px;

  background-color: transparent;
  border: none;
  border-radius: 30%;

  cursor: pointer;
  outline: none;

  transition-property: fill, background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    fill: #0000ff;
  }

  @media screen and (min-width: 768px) { 
    display: none;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 5px;

  cursor: pointer;
  border-radius: 6px;
  border-bottom: 1px dashed #808080;
  transition-property: background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    background-color: #a5b1d3;
  }
`;

export const BoxData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) { 
  flex-direction: row;
  }
`;

export const BoxEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
`;

export const Inner = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (min-width: 768px) { 
    flex-direction: row;
    gap: 8px;
  }
`;

export const Name = styled.span`
  width: 120px;
`;

export const Number = styled.span`
  margin-right: 15px;
  width: 120px;
`;

export const Link = styled.a`
  position: relative;
  text-decoration: none;
  color: inherit;
`;

export const IconPhoneLink = styled(IconPhone)`
  fill: #2DC100;
  transition-property: transform, fill;
  transition: var(--animation);

  &:hover,
  &:focus {
    transform: scale(1.1);
    fill: #008000;
  }
`;

export const Avatarstyled = styled(Avatar)`
  cursor: pointer;
  transition-property: transform;
  transition: var(--animation);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Text = styled.p`
 font-size: 18px;
 font-weight: 600;
`;


