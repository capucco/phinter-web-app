import React, { useCallback, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { PostService } from 'services';
import { Button, Modal, Textarea, useHttp } from 'app';

import { VideoPlayer, Wrapper } from './UploadModal.styled';

type TUploadModal = {
  isOpen: boolean;
  onClose: () => void;
  media: File;
};

export const UploadModal = ({ isOpen, onClose, media }: TUploadModal) => {
  const http = useHttp();
  const [description, setDescription] = useState('');
  const { account } = useWeb3React();
  const handlePhintClick = useCallback(async () => {
    await PostService.createPost(http, {
      media,
      description,
      creatorAddress: account,
    });
    setDescription('');
    onClose();
  }, [account, description, http, media, onClose]);
  const mediaFile = useMemo(
    () => (media ? URL.createObjectURL(media) : null),
    [media]
  );

  return (
    <Modal {...{ isOpen, onClose, maxWidth: '800px' }}>
      <Wrapper>
        <VideoPlayer
          loop
          muted
          controls={media?.type?.includes('video')}
          autoPlay
          src={mediaFile}
          poster={mediaFile}
        />
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Write something here if you want"
          wrapperStyle={{ width: '100%', marginTop: 20 }}
        />
        <Button variant="secondary" onClick={handlePhintClick}>
          Phint it
        </Button>
      </Wrapper>
    </Modal>
  );
};
