import styled from 'styled-components';
import { ReactComponent as SearchFilter } from "images/search-filter-icon.svg";


export const Label = styled.label`
  position: relative;

  display:flex;
  flex-direction: column;
  gap:10px;
  margin: 8px 0;

  border: 1px #808080;
  border-style: dashed none;
`;

export const IconSearchFilter = styled(SearchFilter)`
  position: absolute;
  top: 10px;
  left: 222px;

  fill: slategrey;
 
  transition-property: fill, background-color;
  transition: var(--animation);

  &:hover,
  &:focus {
    /* fill: #0000ff; */
  }
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 4px;
  max-width: 250px;
  font-size: 16px;
`;
