import { useCallback, useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useWeb3React } from '@web3-react/core';

import {
  Icon,
  POST_PAGE_ROUTE,
  dayjs,
  randomGradient,
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
  creatorAddress: string;
  creationDate: string;
  phintCount: string;
};

export const Card = ({
  postId,
  mediaId,
  header,
  creatorAddress,
  creationDate,
  description,
  phintCount,
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
    <Container>
      <Header>
        <CreatorImage style={{ background: randomGradient }} />
        <div>
          <CreatorName>{creatorAddress}</CreatorName>
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
    </Container>
  );
};
