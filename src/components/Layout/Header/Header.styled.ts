import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  user-select: none;
  z-index: 3;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  margin-left: 20px;
`;
