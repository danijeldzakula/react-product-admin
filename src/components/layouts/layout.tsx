import { Helmet, HelmetProvider } from 'react-helmet-async';

import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

import { Main, Wrapper } from '.';
import Header from '../header/Header';

type TLayout = TGlobalProps & {
  title?: string;
};

export function Layout({ children, title = 'Home | Admin' }: TLayout) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href="http://localhost:4000/admin" />
        <meta name="robots" content="noindex, indexifembedded" />
        <meta name="robots" content="nofollow" />
        <meta name="robots" content="noarchive" />
        <meta name="robots" content="noimageindex" />
        <meta name="robots" content="notranslate" />
        <meta name="robots" content="nositelinkssearchbox" />

        <meta name="description" content="Admin Panel App" />
        <meta name="keywords" content="Admin, Panel, App" />
        <meta name="author" content="Danijel Dzakula" />
      </Helmet>

      <Wrapper className={clsx('__app__')}>
        <Header />

        <Main
          className={clsx('relative [&>section]:pt-8 last:[&>section]:pb-8')}
        >
          {children}
        </Main>
      </Wrapper>
    </HelmetProvider>
  );
}
