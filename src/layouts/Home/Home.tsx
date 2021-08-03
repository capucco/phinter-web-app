import { useRef, useState } from 'react';
import { useToggle } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import {
  Card,
  CardPreloader,
  DropArea,
  Layout,
  TPost,
  useHttp,
  useItems,
} from 'app';
import { PostService } from 'services';

import { CardWrapper, Container } from './Home.styled';
import { UploadModal } from './UploadModal';

type THome = {
  posts: TPost[];
};

const LIMIT = 10;
let OFFSET = 11;

export const Home = ({ posts }: THome) => {
  const http = useHttp();
  const [isUploadModalOpen, handleToggleUploadModal] = useToggle(false);
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const { account } = useWeb3React();
  const containerRef = useRef(null);
  const [postList, { addToEnd: addToPostList }] = useItems<TPost>(posts);

  const handleImageDrop = (file: File[]) => {
    handleToggleUploadModal();
    setMedia(file[0]);
  };

  const handleContainerScroll = async () => {
    const { height } = containerRef.current.getBoundingClientRect();

    if (height - window.scrollY < 1500 && !loading && !allPostsLoaded) {
      setLoading(true);
      const posts = await PostService.getPosts(http, LIMIT, OFFSET);
      OFFSET += LIMIT;
      setLoading(false);

      if (posts.length) {
        addToPostList(posts);
      } else {
        setAllPostsLoaded(true);
      }
    }
  };

  return (
    <Layout onWheel={handleContainerScroll}>
      <Container ref={containerRef}>
        {account ? (
          <DropArea
            wrapperStyle={{ width: '100%' }}
            onDrop={handleImageDrop}
            accept="audio/*,video/*,image/*"
          >
            {() => <div>Phint more!</div>}
          </DropArea>
        ) : null}
        {postList?.map(card => (
          <CardWrapper key={card.postId}>
            <Card {...card} />
          </CardWrapper>
        ))}
        {loading ? (
          <CardWrapper>
            <CardPreloader />
          </CardWrapper>
        ) : null}
        <UploadModal
          media={media}
          isOpen={isUploadModalOpen}
          onClose={handleToggleUploadModal}
        />
      </Container>
    </Layout>
  );
};
