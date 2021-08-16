import { FC } from 'react';
import initialPicture from '../../../../assets/initial-picture.jpg';
import MeaningImage from './styled/MeaningImage.styled';
import ImageWrapper from './styled/ImageWrapper.styled';
import Urls from '../../../../core/constants/urls';

interface ComponentProps {
    image: string
}

const WordImage: FC<ComponentProps> = ({ image }) => (
  <ImageWrapper>
    <MeaningImage
      src={image
        ? `${Urls.Media}${image}`
        : initialPicture}
      alt="word meaning"
    />
  </ImageWrapper>
);

export default WordImage;
