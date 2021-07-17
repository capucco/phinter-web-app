import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${({ theme }) => theme.media.mobile};
  margin: 20px auto;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }
`;

export const CardWrapper = styled.div`
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;
