import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import initialPicture from '../../../../assets/initial-picture.jpg';
import MeaningImage from './styled/MeaningImage.styled';
import ImageWrapper from './styled/ImageWrapper.styled';
import Urls from '../../../../core/constants/urls';

interface ComponentProps {
    image: string
}

const WordImage: FC<ComponentProps> = memo(({ image }) => {
  const [t] = useTranslation();

  return (
    <ImageWrapper>
      <MeaningImage
        src={image
          ? `${Urls.Media}${image}`
          : initialPicture}
        alt={t('main-page.no-image-text')}
      />
    </ImageWrapper>
  );
});

export default WordImage;
