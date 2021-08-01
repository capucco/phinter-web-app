import { GetServerSideProps } from 'next';

import { getHttpClient } from 'app';
import { PostService } from 'services';

export { Home as default } from 'layouts';

export const getServerSideProps: GetServerSideProps = async () => {
  const http = getHttpClient();
  try {
    const posts = await PostService.getPosts(http);

    return {
      props: { posts },
    };
  } catch (e) {
    return {
      props: { posts: [] },
    };
  }
};
