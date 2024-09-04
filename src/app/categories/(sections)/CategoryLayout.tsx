import clsx from 'clsx';

import { Container, Section } from '@/components/layouts';

import { type TGlobalProps } from '@/types';

import Content from '../(components)/Content';
import Sidebar from '../(components)/Sidebar';

type TProps = TGlobalProps;

export default function CategoryLayout({ className }: TProps) {
  return (
    <Section className={clsx('', className)}>
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
          <Sidebar />
          <Content />
        </div>
      </Container>
    </Section>
  );
}
