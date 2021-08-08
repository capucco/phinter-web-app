import { GetServerSideProps } from 'next';
import Head from 'next/head';

import {
  TUser,
  getHttpClient,
  truncateString,
  withAuthServerSideProps,
} from 'app';
import { PostService } from 'services';
import { Profile } from 'layouts';

export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async ({ query }) => {
    const http = getHttpClient();
    try {
      const data = await PostService.getPost(http, query.profileId as string);

      return {
        props: { ...data },
      };
    } catch (e) {
      return { props: {} };
    }
  }
);

const ProfilePage = (props: TUser) => {
  const { userId, description, nickname, picture } = props;

  return (
    <>
      <Head>
        <title>{nickname ? `Phinter: ${nickname}` : 'Phinter'}</title>
        <meta
          property="og:title"
          content={nickname ? `Phinter: ${nickname}` : 'Phinter'}
        />
        {description ? (
          <meta
            property="og:description"
            content={truncateString(description, 30)}
          />
        ) : null}
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}/posts/${userId}`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}/post/${userId}/${picture}`}
        />
      </Head>
      <Profile {...props} />
    </>
  );
};

export default ProfilePage;
