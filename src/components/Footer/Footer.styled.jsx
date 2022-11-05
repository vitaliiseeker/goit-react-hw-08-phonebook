import styled from 'styled-components';
import { ReactComponent as GitHub } from "images/github.svg";

export const TextFooter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 6px 12px;
  border-top: 3px solid #c0c0c0;
`;

export const LinkGitHub = styled.a`
  display: inline-block;
`;

export const GitHubLogo = styled(GitHub)`
  cursor: pointer;
  border-radius: 50%;
  transition: background-color var(--animation);
  
  &.active,
  &:hover {
    background-color: #d1d1d1;
  }
`;
