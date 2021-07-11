import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.media.mobile};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 100%;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
`;

export const Minted = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 100;
`;

export const Description = styled.div`
  margin-top: 5px;
  padding: 20px;
  font-size: 20px;
  font-weight: 200;
  align-self: flex-start;
`;

export const VideoPlayer = styled.video`
  object-fit: contain;
  max-width: 100%;
`;
