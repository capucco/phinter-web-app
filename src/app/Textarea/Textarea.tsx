import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { TEmotionProps } from 'app';

import { Label, LabelText, Message, StyledTextarea } from './Textarea.styled';

export interface ITextarea extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  message?: string;
  isError?: boolean;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  wrapperStyle?: TEmotionProps;
  labelStyle?: TEmotionProps;
  textareaStyle?: TEmotionProps;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  (
    {
      disabled,
      label,
      message,
      wrapperStyle,
      labelStyle,
      textareaStyle,
      isError,
      ...rest
    },
    ref
  ) => (
    <Label isDisabled={disabled} {...{ wrapperStyle }}>
      {label && <LabelText {...{ labelStyle }}>{label}</LabelText>}
      <StyledTextarea {...{ ...rest, ref, disabled, textareaStyle, isError }} />
      {message && <Message>{message}</Message>}
    </Label>
  )
);
