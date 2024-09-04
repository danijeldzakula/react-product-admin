import clsx from 'clsx';

import { Article } from '@/components/layouts';

import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function Content({ className }: TProps) {
  return <Article className={clsx('', className)}>Content</Article>;
}
