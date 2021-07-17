import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 30px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 0 30px;
  }
`;

export const VideoPlayer = styled.video`
  object-fit: contain;
  width: 100%;
  max-height: 400px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    max-height: 100%;
  }
`;
