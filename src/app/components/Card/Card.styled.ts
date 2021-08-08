import styled from '@emotion/styled';

import { TEmotionProps, getComponentStyle } from 'app';

export const Container = styled.div<{ wrapperStyle: TEmotionProps }>`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.media.mobile};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  border-radius: 5px;
  cursor: default;

  ${({ theme, wrapperStyle }) => getComponentStyle(wrapperStyle, { theme })};

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
`;

export const CreatorImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CreatorName = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Date = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const VideoPlayer = styled.video`
  object-fit: contain;
  width: 100%;
  cursor: pointer;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 5px 20px 0;
`;

export const Minted = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin-top: 10px;
  padding: 0 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Description = styled.p`
  margin-top: 10px;
  padding: 0 20px;
  font-size: 18px;
  font-weight: 200;
  align-self: flex-start;
  white-space: pre-wrap;
  cursor: pointer;
`;
