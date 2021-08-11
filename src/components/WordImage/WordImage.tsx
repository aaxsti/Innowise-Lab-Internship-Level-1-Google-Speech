import { FC } from 'react';
import initialPicture from '../../assets/initial-picture.jpg';
import { ImageWrapper, MeaningImage } from './WordImage.styled';

interface ComponentProps {
    image: string
}

const WordImage: FC<ComponentProps> = ({ image }) => (
  <ImageWrapper>
    <MeaningImage
      src={image
        ? `https://raw.githubusercontent.com/aaxsti/rslang-data/master/${image}`
        : initialPicture}
      alt="word meaning"
    />
  </ImageWrapper>
);

export default WordImage;
