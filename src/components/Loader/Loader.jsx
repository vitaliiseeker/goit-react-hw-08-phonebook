import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <RotatingLinesStyled>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="1.5"
        width="150"
        visible={true}
      />
    </RotatingLinesStyled>)
}