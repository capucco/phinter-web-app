import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${({ theme }) => theme.media.mobile};
  margin: 5px auto 50px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
  width: 100%;
`;

export const CreatorImage = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 15px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CreatorName = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;

export const Date = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const VideoPlayer = styled.video`
  object-fit: cover;
  width: 100%;
  height: 500px;
`;

export const Title = styled.h1`
  margin: 30px 0 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 20px 0;
  font-size: 16px;
  font-weight: 200;
  white-space: pre-wrap;
`;
