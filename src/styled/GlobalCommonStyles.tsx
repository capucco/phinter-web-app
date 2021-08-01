import { Global, Theme, css } from '@emotion/react';

type TGlobalCommonStyles = {
  theme: Theme;
};

export const GlobalCommonStyles = ({ theme }: TGlobalCommonStyles) => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body,
      #__next {
        height: 100%;
      }

      body {
        font-family: Verdana, 'sans-serif';
        font-size: 16px;
        color: ${theme.colors.black};
      }

      a {
        transition: color ease-out 0.3s;

        &:hover {
          color: ${theme.colors.grey};
        }
      }
    `}
  />
);
