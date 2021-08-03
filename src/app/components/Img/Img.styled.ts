import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { TEmotionProps, getComponentStyle } from 'app';

export const StyledImg = styled.img<{ imageStyle?: TEmotionProps }>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${({ theme, imageStyle }) => getComponentStyle(imageStyle, { theme })};
`;

const placeholderKeyframes = keyframes`
    from {
      left: -50%;
    }
    to {
      left: 100%;
    }
`;

export const Placeholder = styled.div<{ imageStyle?: TEmotionProps }>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.grey};
  overflow: hidden;

  ${({ theme, imageStyle }) => getComponentStyle(imageStyle, { theme })};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.001) 0%,
      ${({ theme }) => theme.colors.white} 50%,
      rgba(255, 255, 255, 0.001) 100%
    );
    animation: ${placeholderKeyframes} 1.25s infinite;
  }
`;
