import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  width: ${({ theme }) => theme.media.mobile};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: default;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

const opacityKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const Header = styled.div`
  width: 35%;
  height: 35px;
  background: ${({ theme }) => theme.colors.greyLight};
  opacity: 1;
  animation: ${opacityKeyframes} 3s infinite;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.greyLight};
  opacity: 1;
  animation: ${opacityKeyframes} 3s infinite;
`;

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background: ${({ theme }) => theme.colors.greyLight};
  opacity: 1;
  animation: ${opacityKeyframes} 3s infinite;
`;
