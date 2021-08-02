import styled from '@emotion/styled';

import { TEmotionProps, getComponentStyle } from 'app';

export const Label = styled.label<{
  isDisabled?: boolean;
  wrapperStyle?: TEmotionProps;
}>`
  display: block;
  position: relative;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ${({ theme, wrapperStyle }) => getComponentStyle(wrapperStyle, { theme })};
`;

export const LabelText = styled.div<{ labelStyle?: TEmotionProps }>`
  margin-bottom: 8px;

  ${({ theme, labelStyle }) => getComponentStyle(labelStyle, { theme })};
`;

export const Input = styled.input<{
  disabled?: boolean;
  isError?: boolean;
  inputStyle?: TEmotionProps;
  placeholderStyle?: TEmotionProps;
  hasLeftSlot: boolean;
  hasRightSlot: boolean;
}>`
  width: 100%;
  height: 40px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.grey : theme.colors.black};
  padding: 10px ${({ hasRightSlot }) => (hasRightSlot ? 50 : 10)}px 10px
    ${({ hasLeftSlot }) => (hasLeftSlot ? 50 : 10)}px;
  transition: border-color ease-out 0.3s, color ease-out 0.3s;
  outline: none;

  ${({ theme, inputStyle }) => getComponentStyle(inputStyle, { theme })};

  &::placeholder {
    ${({ theme, placeholderStyle }) =>
      getComponentStyle(placeholderStyle, { theme })};
  }
`;

export const Message = styled.div`
  position: absolute;
  top: calc(100% - 20px);
  left: 10px;
  max-width: calc(100% - 10px);

  b {
    font-weight: bold;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }
`;
