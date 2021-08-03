import { AxiosInstance } from 'axios';

import { TComment } from 'app';

export type TGetCommentsResponse = TComment[];

export class CommentService {
  static getComments(
    http: AxiosInstance,
    postId: string,
    limit: number,
    offset: number
  ) {
    return http.get<TGetCommentsResponse>(
      `comments/${postId}?limit=${limit}&offset=${offset}`
    );
  }

  static createComment(http: AxiosInstance, postId: string, text: string) {
    return http.post<TComment>(`comments/${postId}`, { text });
  }
}
