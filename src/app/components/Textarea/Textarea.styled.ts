import styled from '@emotion/styled';

import { TEmotionProps, getComponentStyle } from 'app';

export const Label = styled.label<{
  isDisabled?: boolean;
  wrapperStyle?: TEmotionProps;
}>`
  display: block;
  position: relative;
  padding-bottom: 24px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};

  ${({ theme, wrapperStyle }) => getComponentStyle(wrapperStyle, { theme })};
`;

export const LabelText = styled.div<{ labelStyle?: TEmotionProps }>`
  margin-bottom: 8px;

  ${({ theme, labelStyle }) => getComponentStyle(labelStyle, { theme })};
`;

export const StyledTextarea = styled.textarea<{
  disabled?: boolean;
  isError?: boolean;
  textareaStyle?: TEmotionProps;
}>`
  display: block;
  width: 100%;
  min-height: 72px;
  padding: 10px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.grey : theme.colors.black};
  font-family: Verdana, 'sans-serif';
  transition: border-color ease-out 0.3s;
  resize: none;
  appearance: none;
  outline: none;

  ${({ theme, textareaStyle }) => getComponentStyle(textareaStyle, { theme })};
`;

export const Message = styled.div`
  position: absolute;
  bottom: 6px;
  left: 10px;
  max-width: calc(100% - 10px);
`;
