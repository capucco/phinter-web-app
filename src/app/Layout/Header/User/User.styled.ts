import styled from '@emotion/styled';

export const StyledUser = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 100%;
`;

export const LoggedUser = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
`;

export const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
  cursor: default;
`;

export const Balance = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const SignIn = styled.div`
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const AddAsset = styled.div`
  cursor: pointer;
`;
