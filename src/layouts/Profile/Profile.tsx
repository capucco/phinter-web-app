import { Layout, TUser } from 'app';

import { Container } from './Profile.styled';

type TProfile = TUser;

export const Profile = (profile: TProfile) => (
  <Layout>
    <Container>
      Profile change token logo and write profile description and links and
      initial price of personal token, also user shoud have an ability to create
      any volume of token
    </Container>
  </Layout>
);
