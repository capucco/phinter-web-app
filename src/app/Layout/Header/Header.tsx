import { Img } from 'app';

import { Logo, StyledHeader } from './Header.styled';
import { User } from './User';

export const Header = () => (
  <StyledHeader>
    <Logo>
      <Img src="./logo.png" />
    </Logo>
    <User />
  </StyledHeader>
);