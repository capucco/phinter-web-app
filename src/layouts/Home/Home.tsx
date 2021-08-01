import { useState } from 'react';
import { useToggle } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import { Card, DropArea, Layout, TPost } from 'app';

import { CardWrapper, Container } from './Home.styled';
import { UploadModal } from './UploadModal';

type THome = {
  posts: TPost[];
};

export const Home = ({ posts }: THome) => {
  const [isUploadModalOpen, handleToggleUploadModal] = useToggle(false);
  const [media, setMedia] = useState(null);
  const { account } = useWeb3React();

  const handleImageDrop = (file: File[]) => {
    handleToggleUploadModal();
    setMedia(file[0]);
  };

  return (
    <Layout>
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
    </Layout>
  );
};
