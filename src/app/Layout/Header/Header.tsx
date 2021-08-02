import Link from 'next/link';

import { HOME_PAGE_ROUTE, Img } from 'app';

import { Logo, StyledHeader } from './Header.styled';
import { User } from './User';

export const Header = () => (
  <StyledHeader>
    <Link href={HOME_PAGE_ROUTE}>
      <Logo>
        <Img src="/logo.png" />
      </Logo>
    </Link>
    <User />
  </StyledHeader>
);
