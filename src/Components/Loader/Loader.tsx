import { ThreeCircles } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

interface LoaderProps {
  color: string;
  height: string;
  width: string;
}

export const Loader = ({ color, height, width }: LoaderProps) => {
  return (
    <LoaderContainer>
      <ThreeCircles color={color} height={height} width={width} />
    </LoaderContainer>
  );
};
