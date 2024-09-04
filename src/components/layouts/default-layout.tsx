import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

import { Layout } from './layout';

type TProps = TGlobalProps & {
  title?: string;
};

export default function DefaultLayout({ className, children, title }: TProps) {
  return (
    <Layout className={clsx(className)} title={title}>
      {children}
    </Layout>
  );
}
