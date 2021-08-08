import { KeyboardEvent, useCallback, useState } from 'react';

import { Input, TComment, TEmotionProps, truncateHash, useHttp } from 'app';
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
  comments: TComment[];
  wrapperStyle?: TEmotionProps;
};

export const Comments = ({ comments, postId, wrapperStyle }: TComments) => {
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
    <Container {...{ wrapperStyle }}>
      {comments?.map(({ text, commentId }) => (
        <Comment key={commentId}>
          <UserImage src={'/user.svg'} />
          <div>
            <CreatorName>
              {truncateHash('0xbf89412D61DB4fe5556E4262F49e64E1B44D205e')}
            </CreatorName>
            <Text>{text}</Text>
          </div>
        </Comment>
      ))}
      <Form>
        <UserImage src={'/user.svg'} />
        <Input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          wrapperStyle={{ width: '100%' }}
          inputStyle={{ height: 30 }}
        />
      </Form>
    </Container>
  );
};
