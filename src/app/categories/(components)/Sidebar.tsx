import clsx from 'clsx';

import { Aside } from '@/components/layouts';

import { type TGlobalProps } from '@/types';

import CategoriesForm from './CategoriesForm';

type TProps = TGlobalProps;

export default function Sidebar({ className }: TProps) {
  return (
    <Aside
      className={clsx(
        'border-r border-neutral-200 pr-4 dark:border-neutral-800',
        className
      )}
    >
      <CategoriesForm />
    </Aside>
  );
}
