import { AxiosInstance } from 'axios';

import { TPost } from 'app';

export type TGetPostResponse = TPost;

export type TGetPostsResponse = TPost[];

export type TCreatePostDto = {
  media: File;
  header: string;
  description: string;
  creatorAddress: string;
};

export class PostService {
  static getPost(http: AxiosInstance, postId: string) {
    return http.get<TGetPostResponse>(`post/${postId}`);
  }

  static getPosts(http: AxiosInstance) {
    return http.get<TGetPostsResponse>('post/list');
  }

  static createPost(
    http: AxiosInstance,
    { media, header, description, creatorAddress }: TCreatePostDto
  ) {
    const bodyFormData = new FormData();
    bodyFormData.append('media', media);
    bodyFormData.append('header', header);
    bodyFormData.append('description', description);
    bodyFormData.append('creatorAddress', creatorAddress);

    return http.post<TPost>('post', bodyFormData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  static increasePostRathing(
    http: AxiosInstance,
    postId: string,
    address: string
  ) {
    return http.post<TPost>(`post/${postId}/increase-rathing`, { address });
  }
}
