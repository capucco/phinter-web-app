import Link from 'next/link';

import {
  Comments,
  Layout,
  PROFILE_PAGE_ROUTE,
  TComment,
  TPost,
  dayjs,
} from 'app';

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

const MOCK_COMMENT: TComment[] = [
  {
    commentId: '1',
    userId: '1',
    text: 'askdaskdaskjsdn fjds fdjs fajds fjasn f',
  },
  {
    commentId: '2',
    userId: '2',
    text: 'ask daskda asn f',
  },
];

export const Post = (post: TPost) => {
  const {
    postId,
    creatorId,
    mediaId,
    header,
    creatorAddress,
    creatorName,
    creationDate,
    description,
  } = post;

  return (
    <Layout>
      <Container>
        <Header>
          <Link href={PROFILE_PAGE_ROUTE} as={`/profile/${creatorId}`}>
            <CreatorImage src={'/user.svg'} />
          </Link>
          <div>
            <Link href={PROFILE_PAGE_ROUTE} as={`/profile/${creatorId}`}>
              <CreatorName>
                {creatorName ? creatorName : creatorAddress}
              </CreatorName>
            </Link>
            <Date>{dayjs().to(dayjs(creationDate))}</Date>
          </div>
        </Header>
        <VideoPlayer
          loop
          muted
          autoPlay
          src={`${process.env.NEXT_PUBLIC_API_URL}post/${postId}/${mediaId}`}
          poster={`${process.env.NEXT_PUBLIC_API_URL}post/${postId}/${mediaId}`}
        />
        {header ? <Title>{header}</Title> : null}
        <Description>{description}</Description>
        <Comments postId={postId} comments={MOCK_COMMENT} />
      </Container>
    </Layout>
  );
};
