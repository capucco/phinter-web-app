import styled from '@emotion/styled';

export const Container = styled.div`
  width: ${({ theme }) => theme.media.mobile};
  margin: 25px auto 50px;

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 95%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: ;
`;

export const ProifleImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 25px;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-size: 20px;
`;

export const Description = styled.div`
  margin-top: 15px;
  font-size: 14px;
`;

export const Section = styled.div`
  margin-top: 40px;
`;

export const ChartActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`;

export const NftItem = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 20px 20px 0 0;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
`;

export const NftImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const NftTitle = styled.div`
  margin: 10px;
  font-size: 14px;
`;
