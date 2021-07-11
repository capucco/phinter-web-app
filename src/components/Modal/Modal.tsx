import { ReactNode, SyntheticEvent, useCallback } from 'react';
import { css } from '@emotion/react';
import { useTransition } from 'react-spring';

import { Icon, Portal, useScrollLock } from 'components';

import { Body, BodyWrapper, Overlay, StyledModal } from './Modal.styled';

type TModal = {
  isOpen?: boolean;
  withCloseIcon?: boolean;
  maxWidth?: string;
  children?: ReactNode;
  onClose?: () => void;
};

const stopPropagation = (e: SyntheticEvent) => e.stopPropagation();

export const Modal = ({
  isOpen,
  withCloseIcon = true,
  maxWidth,
  children,
  onClose,
}: TModal) => {
  const bodyWrapperRef = useScrollLock(isOpen);

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleClose = useCallback(() => {
    if (isOpen && onClose) onClose();
  }, [isOpen, onClose]);

  return (
    <Portal id="modal">
      {isOpen && (
        <StyledModal
          aria-modal="true"
          role="dialog"
          {...{ withCloseIcon, maxWidth }}
          onClick={stopPropagation}
        >
          {withCloseIcon && (
            <Icon
              icon="close"
              onClick={handleClose}
              iconStyle={({ theme }) => css`
                position: absolute;
                right: 16px;
                top: 16px;
                color: ${theme.colors.grey};
              `}
            />
          )}
          <BodyWrapper ref={bodyWrapperRef}>
            <Body>{children}</Body>
          </BodyWrapper>
        </StyledModal>
      )}
      {transition(
        (style, item) =>
          item && <Overlay {...{ style }} onClick={handleClose} />
      )}
    </Portal>
  );
};
