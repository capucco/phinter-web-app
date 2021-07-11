import { DropzoneOptions, DropzoneState, FileRejection } from 'react-dropzone';

import { TEmotionProps } from 'components';

export type { FileRejection };

export interface IDropArea extends DropzoneOptions {
  label?: React.ReactNode;
  children?: (
    props: Omit<DropzoneState, 'getRootProps' | 'getInputProps'>
  ) => JSX.Element;
  message?: string;
  wrapperStyle?: TEmotionProps;
  className?: string;
}
