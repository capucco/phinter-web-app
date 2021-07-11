import styled from '@emotion/styled';

import { TEmotionProps, getComponentStyle } from 'components';

export const StyledDropArea = styled.div<{ wrapperStyle?: TEmotionProps }>`
  position: relative;
  padding-bottom: 24px;

  ${({ theme, wrapperStyle }) => getComponentStyle(wrapperStyle, { theme })};
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const Area = styled.div<{
  isDragActive: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  margin-top: 8px;
  border: 1px dashed
    ${({ theme, isDragActive }) =>
      isDragActive ? theme.colors.black : theme.colors.grey};
  outline: none;
  transition: border-color ease-out 0.2s;
  cursor: pointer;
`;

export const Message = styled.div`
  position: absolute;
  bottom: 6px;
  left: 10px;
  max-width: calc(100% - 10px);
  color: ${({ theme }) => theme.colors.grey};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: not-allowed;
`;
