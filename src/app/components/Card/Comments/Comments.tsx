import { KeyboardEvent, useCallback, useState } from 'react';

import { Input, truncateHash, useHttp } from 'app';
import { CommentService } from 'services';

import {
  Comment,
  Container,
  CreatorName,
  Form,
  Text,
  UserImage,
} from './Comments.styled';

type TComments = {
  postId: string;
};

export const Comments = ({ postId }: TComments) => {
  const http = useHttp();
  const [text, setText] = useState('');

  const handleKeyDown = useCallback(
    async (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code === 'Enter') {
        await CommentService.createComment(http, postId, text);
        setText('');
      }
    },
    [http, postId, text]
  );

  return (
    <Container>
      <Comment>
        <UserImage src={'/user.svg'} />
        <div>
          <CreatorName>
            {truncateHash('0xbf89412D61DB4fe5556E4262F49e64E1B44D205e')}
          </CreatorName>
          <Text>
            The modern English noun dwarf descends from the Old English dweorg.
            It has a variety of cognates in other Germanic languages
          </Text>
        </div>
      </Comment>
      <Form>
        <UserImage src={'/user.svg'} />
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          wrapperStyle={{ width: '100%' }}
          inputStyle={{ height: 30, borderRadius: 5 }}
        />
      </Form>
    </Container>
  );
};
