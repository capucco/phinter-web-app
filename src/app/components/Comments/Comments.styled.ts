import styled from '@emotion/styled';

import { TEmotionProps, getComponentStyle } from 'app';

export const Container = styled.div<{ wrapperStyle: TEmotionProps }>`
  ${({ theme, wrapperStyle }) => getComponentStyle(wrapperStyle, { theme })};
`;

export const Comment = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const UserImage = styled.img`
  min-width: 30px;
  max-width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const CreatorName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
