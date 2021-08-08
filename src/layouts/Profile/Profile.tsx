import { Button, Card, Layout, TUser } from 'app';

import {
  ChartActions,
  Container,
  Description,
  Header,
  Name,
  NftImage,
  NftItem,
  NftTitle,
  ProifleImage,
  Section,
  Title,
} from './Profile.styled';

type TProfile = TUser;

export const Profile = (profile: TProfile) => (
  <Layout>
    <Container>
      {/* Profile change token logo and write profile description and links and
      initial price of personal token, also user shoud have an ability to create
      any volume of token */}
      <Header>
        <ProifleImage src={'/mock_user.jpg'} />
        <div>
          <Name>Sydneylcarlson</Name>
          <Description>
            Co-founder & designer of @wildflowercases 😌 film
            @whitewinekindasweet wildflowercases.com
          </Description>
          <Description>Current token price: 12.000 ETH</Description>
        </div>
      </Header>
      <Section>
        <Title>Personal coin:</Title>
        <img src="/chart.svg" width="100%" />
        <ChartActions>
          <Button buttonStyle={{ marginRight: 20 }}>Buy</Button>
          <Button>Sell</Button>
        </ChartActions>
      </Section>
      <Section>
        <Title>NFTs for sale:</Title>
        <NftItem>
          <NftImage src="https://www.platinum-gold-record-disc.com/assets/images/product/Broken_c90b3a29985af1bbae75158f34c150e3.jpg" />
          <NftTitle>Broken Record Award Trophy Gold Plated</NftTitle>
        </NftItem>
        <NftItem>
          <NftImage src="https://www.giantfreakinrobot.com/wp-content/uploads/2021/05/harley-quinn-margot-robbie-weapon-900x506.jpg" />
          <NftTitle>Role of Harley Queen in Sucide Squad</NftTitle>
        </NftItem>
      </Section>
      <Section>
        <Title>Blog:</Title>
        <Card />
      </Section>
    </Container>
  </Layout>
);
