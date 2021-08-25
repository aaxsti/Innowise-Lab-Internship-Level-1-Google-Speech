import { StyledComponent } from 'styled-components';
import { ComponentType } from 'react';
import Routes from '../../constants/routes';

export interface CustomButtonProps {
  component?: StyledComponent<ComponentType, {}>
  to?: Routes
}
