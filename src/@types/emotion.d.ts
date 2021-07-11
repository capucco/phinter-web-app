import '@emotion/react';

import { colors, media } from '../styled';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    media: typeof media;
  }
}
