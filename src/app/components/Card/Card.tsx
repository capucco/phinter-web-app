import { useCallback, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useWeb3React } from '@web3-react/core';

import {
  Comments,
  Icon,
  POST_PAGE_ROUTE,
  PROFILE_PAGE_ROUTE,
  TComment,
  TEmotionProps,
  TUser,
  dayjs,
  truncateString,
  useHttp,
} from 'app';
import { PostService } from 'services';

import {
  Container,
  Controls,
  CreatorImage,
  CreatorName,
  Date,
  Description,
  Header,
  Minted,
  Title,
  VideoPlayer,
} from './Card.styled';

type TCard = {
  postId: string;
  mediaId: string;
  header: string;
  description: string;
  creator: TUser;
  creationDate: string;
  phintCount: string;
  wrapperStyle?: TEmotionProps;
};

const MOCK_COMMENT: TComment[] = [
  {
    commentId: '1',
    userId: '0xbf89412D61DB4fe5556E4262F49e64E1B44D205e',
    text: 'You are genious!',
  },
  {
    commentId: '2',
    userId: '0xbf89412D61DB4fe5556E4262F49e64E1B44D205e',
    text: 'Can I buy one? :)',
  },
];

export const Card = ({
  postId,
  mediaId,
  header,
  creator,
  creationDate,
  description,
  phintCount,
  wrapperStyle,
}: TCard) => {
  const http = useHttp();
  const [phinted, setPhinted] = useState(phintCount);
  const { account } = useWeb3React();

  const handleIncreaseClick = useCallback(async () => {
    const { phintCount: count } = await PostService.increasePostRathing(
      http,
      postId,
      account
    );
    setPhinted(count);
  }, [account, http, postId]);

  const handleShareClick = useCallback(async () => {
    //
  }, []);

  return (
    <Container {...{ wrapperStyle }}>
      <Header>
        <Link href={PROFILE_PAGE_ROUTE} as={`/profile/${creator?.userId}`}>
          <CreatorImage src={'/user.svg'} />
        </Link>
        <div>
          <CreatorName>
            {creator?.nickname ?? creator?.publicAccount}
          </CreatorName>
          <Date>{dayjs().to(dayjs(creationDate))}</Date>
        </div>
      </Header>
      <Link href={POST_PAGE_ROUTE} as={`/posts/${postId}`}>
        <VideoPlayer
          key={postId}
          loop
          muted
          autoPlay
          src={`${process.env.NEXT_PUBLIC_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
          poster={`${process.env.NEXT_PUBLIC_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
        />
      </Link>
      <Controls>
        <Minted>
          Phinted: <b>{Number(phinted).toFixed(2)}</b>
          <Icon
            icon="up"
            size="sm"
            viewBox="0 0 100 100"
            onClick={handleIncreaseClick}
            iconStyle={({ theme }) => css`
              margin-left: 10px;
              cursor: pointer;
              fill: ${theme.colors.black};
              opacity: 0.5;
              transition: fill 0.3s ease;

              &:hover {
                fill: ${theme.colors.green};
              }
            `}
          />
        </Minted>
        <div>
          <Icon
            icon="share"
            viewBox="0 0 512 512"
            iconStyle={({ theme }) => css`
              margin-left: 10px;
              cursor: pointer;
              fill: ${theme.colors.black};
              opacity: 0.5;
              transition: opacity 0.3s ease;

              &:hover {
                opacity: 0.7;
              }
            `}
            onClick={handleShareClick}
          />
        </div>
      </Controls>
      {header ? (
        <Link href={POST_PAGE_ROUTE} as={`/posts/${postId}`}>
          <Title>{header}</Title>
        </Link>
      ) : null}
      {description ? (
        <Link href={POST_PAGE_ROUTE} as={`/posts/${postId}`}>
          <Description>{truncateString(description, 500)}</Description>
        </Link>
      ) : null}
      <Comments
        postId={postId}
        comments={MOCK_COMMENT}
        wrapperStyle={{ margin: '10px 20px' }}
      />
    </Container>
  );
};
