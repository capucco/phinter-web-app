import { useEffect, useState } from 'react';
import { useToggle } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import { PostService } from 'services';
import { Card, DropArea, useHttp } from 'components';

import { CardWrapper, Container } from './Home.styled';
import { UploadModal } from './UploadModal';

export const Home = () => {
  const http = useHttp();
  const [posts, setPosts] = useState(null);
  const [isUploadModalOpen, handleToggleUploadModal] = useToggle(false);
  const [media, setMedia] = useState(null);
  const { account } = useWeb3React();

  const handleImageDrop = (file: File[]) => {
    handleToggleUploadModal();
    setMedia(file[0]);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await PostService.getPosts(http);
      setPosts(posts);
    };
    !posts && fetchPosts();
  });

  return (
    <Container>
      {account ? (
        <DropArea
          wrapperStyle={{ width: '100%' }}
          onDrop={handleImageDrop}
          accept="audio/*,video/*,image/*"
        >
          {() => <div>Phint more!</div>}
        </DropArea>
      ) : null}
      {posts?.map(card => (
        <CardWrapper key={card.postId}>
          <Card {...card} />
        </CardWrapper>
      ))}
      <UploadModal
        media={media}
        isOpen={isUploadModalOpen}
        onClose={handleToggleUploadModal}
      />
    </Container>
  );
};
