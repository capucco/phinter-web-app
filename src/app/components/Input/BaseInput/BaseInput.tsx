import { InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { TEmotionProps } from 'app';

import { Input, Label, LabelText, Message } from './BaseInput.styled';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message?: ReactNode;
  isError?: boolean;
  wrapperStyle?: TEmotionProps;
  labelStyle?: TEmotionProps;
  inputStyle?: TEmotionProps;
  placeholderStyle?: TEmotionProps;
}

export const BaseInput = forwardRef<HTMLInputElement, IInput>(
  ({ disabled, label, message, wrapperStyle, labelStyle, ...rest }, ref) => (
    <Label isDisabled={disabled} {...{ wrapperStyle }}>
      {label && <LabelText {...{ labelStyle }}>{label}</LabelText>}
      <Input {...{ ...rest, ref, disabled }} />
      {message && <Message>{message}</Message>}
    </Label>
  )
);
