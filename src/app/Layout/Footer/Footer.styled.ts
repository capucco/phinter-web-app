import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  font-size: 14px;
  user-select: none;
  z-index: 3;
`;
