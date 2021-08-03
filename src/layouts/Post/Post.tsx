import { Layout, TPost, dayjs } from 'app';

import {
  Container,
  CreatorImage,
  CreatorName,
  Date,
  Description,
  Header,
  Title,
  VideoPlayer,
} from './Post.styled';

export const Post = (post: TPost) => {
  const { mediaId, header, creatorAddress, creationDate, description } = post;

  return (
    <Layout>
      <Container>
        <Header>
          <CreatorImage src={'/user.svg'} />
          <div>
            <CreatorName>{creatorAddress}</CreatorName>
            <Date>{dayjs().to(dayjs(creationDate))}</Date>
          </div>
        </Header>
        <VideoPlayer
          loop
          muted
          autoPlay
          src={`${process.env.NEXT_PUBLIC_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
          poster={`${process.env.NEXT_PUBLIC_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
        />
        {header ? <Title>{header}</Title> : null}
        <Description>{description}</Description>
      </Container>
    </Layout>
  );
};
