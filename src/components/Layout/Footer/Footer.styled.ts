import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  user-select: none;
  z-index: 3;
`;
