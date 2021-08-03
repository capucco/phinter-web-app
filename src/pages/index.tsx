import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { getHttpClient, withAuthServerSideProps } from 'app';
import { PostService } from 'services';
import { Home } from 'layouts';

export const getServerSideProps: GetServerSideProps = withAuthServerSideProps(
  async () => {
    const http = getHttpClient();
    try {
      const posts = await PostService.getPosts(http, 10, 1);

      return {
        props: { posts },
      };
    } catch (e) {
      return {
        props: { posts: [] },
      };
    }
  }
);

const HomePage = props => (
  <>
    <Head>
      <title>Phinter</title>
      <meta property="og:title" content="Phinter" />
      <meta
        property="og:description"
        content="Phinter - get paid for your daily content"
      />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_URL}/logo.png`}
      />
    </Head>
    <Home {...props} />
  </>
);

export default HomePage;
