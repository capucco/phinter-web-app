import React, { useCallback, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';

import { PostService } from 'services';
import { Button, Input, Modal, Textarea, useHttp } from 'app';

import { VideoPlayer, Wrapper } from './UploadModal.styled';

type TUploadModal = {
  isOpen: boolean;
  onClose: () => void;
  media: File;
};

export const UploadModal = ({ isOpen, onClose, media }: TUploadModal) => {
  const http = useHttp();
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const { account } = useWeb3React();
  const handlePhintClick = useCallback(async () => {
    await PostService.createPost(http, {
      media,
      header,
      description,
      creatorAddress: account,
    });
    setHeader('');
    setDescription('');
    onClose();
  }, [account, description, header, http, media, onClose]);
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
        <Input
          value={header}
          onChange={e => setHeader(e.target.value)}
          placeholder="Title (+1)"
          wrapperStyle={{ width: '100%', marginTop: 20 }}
        />
        <Textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Text (+5)"
          wrapperStyle={{ width: '100%', marginTop: 10 }}
        />
        <Button variant="secondary" onClick={handlePhintClick}>
          Phint it
        </Button>
      </Wrapper>
    </Modal>
  );
};
