import { ReactNode, WheelEventHandler, forwardRef } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Content, StyledLayout } from './Layout.styled';

type TLayout = {
  children: ReactNode;
  onWheel?: WheelEventHandler<HTMLDivElement>;
};

export const Layout = forwardRef<HTMLDivElement, TLayout>(
  ({ children, onWheel }, ref) => (
    <StyledLayout {...{ ref }}>
      <Header />
      <Content onWheel={onWheel}>{children}</Content>
      <Footer />
    </StyledLayout>
  )
);
