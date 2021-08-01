import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { useWeb3React } from '@web3-react/core';

import { Icon, useHttp } from 'app';
import { PostService } from 'services';

import {
  Container,
  Controls,
  Description,
  Minted,
  VideoPlayer,
} from './Card.styled';

type TCard = {
  postId: string;
  mediaId: string;
  description: string;
  phintCount: string;
};

export const Card = ({ postId, mediaId, description, phintCount }: TCard) => {
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
      <VideoPlayer
        key={postId}
        loop
        muted
        autoPlay
        src={`${process.env.REACT_APP_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
        poster={`${process.env.REACT_APP_API_URL}/post/6f176874a17046c4ae120d23a6861349/${mediaId}`}
      />
      <Controls>
        <Minted>
          Phinted: <b>{phinted}</b>
          <Icon
            icon="up"
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
      <Description>{description}</Description>
    </Container>
  );
};
