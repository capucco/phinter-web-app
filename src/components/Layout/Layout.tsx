import { ReactNode, forwardRef } from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { Content, StyledLayout } from './Layout.styled';

type TLayout = {
  children: ReactNode;
};

export const Layout = forwardRef<HTMLDivElement, TLayout>(
  ({ children }, ref) => (
    <StyledLayout {...{ ref }}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledLayout>
  )
);
