import { FC } from 'react';
import Preloader from './styled/Preloader.styled';
import PreloaderWrapper from './styled/PreloaderWrapper.styles';

interface ComponentProps {
  colored?: string
  size?: number
}
const CustomPreloader: FC<ComponentProps> = ({ colored, size }) => (
  <PreloaderWrapper>
    <Preloader colored={colored} size={size} />
  </PreloaderWrapper>
);

export default CustomPreloader;
