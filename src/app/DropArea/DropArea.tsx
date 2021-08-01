import { useDropzone } from 'react-dropzone';

import { IDropArea } from './types';
import {
  Area,
  Label,
  Message,
  Overlay,
  StyledDropArea,
} from './DropArea.styled';

const DEFAULT_PLACEHOLDER = 'Upload';

export const DropArea = ({
  label,
  className,
  children,
  disabled,
  wrapperStyle,
  message,
  ...rest
}: IDropArea) => {
  const { getRootProps, getInputProps, isDragActive, ...restDropzoneState } =
    useDropzone({
      ...rest,
      disabled,
    });
  const areaBind = getRootProps();

  return (
    <StyledDropArea {...{ wrapperStyle, className }}>
      {label && <Label onClick={areaBind.onClick}>{label}</Label>}
      <Area {...{ ...areaBind, isDragActive }}>
        <input {...getInputProps()} />
        {disabled && <Overlay />}
        {children
          ? children({ ...restDropzoneState, isDragActive })
          : DEFAULT_PLACEHOLDER}
      </Area>
      {message && <Message>{message}</Message>}
    </StyledDropArea>
  );
};
