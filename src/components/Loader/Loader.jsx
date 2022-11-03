import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <RotatingLinesStyled>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </RotatingLinesStyled>)
}