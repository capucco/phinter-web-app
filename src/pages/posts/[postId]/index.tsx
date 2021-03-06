import { GetServerSideProps } from 'next';
import Head from 'next/head';

import {
  TPost,
  getHttpClient,
  truncateString,
  withAuthServerSideProps,
} from 'app';
import { PostService } from 'services';
import { Post } from 'layouts';

export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async ({ query }) => {
    const http = getHttpClient();
    try {
      const data = await PostService.getPost(http, query.postId as string);

      return {
        props: { ...data },
      };
    } catch (e) {
      return { props: {} };
    }
  }
);

const PostPage = (props: TPost) => {
  const { mediaId, postId, header, description } = props;

  return (
    <>
      <Head>
        <title>{header ? `Phinter: ${header}` : 'Phinter'}</title>
        <meta
          property="og:title"
          content={header ? `Phinter: ${header}` : 'Phinter'}
        />
        {description ? (
          <meta
            property="og:description"
            content={truncateString(description, 30)}
          />
        ) : null}
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}/posts/${postId}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}/post/${postId}/${mediaId}`}
        />
      </Head>
      <Post {...props} />
    </>
  );
};

export default PostPage;
