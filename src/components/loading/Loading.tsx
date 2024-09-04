import clsx from 'clsx';

import { Container } from '@/components/layouts';

import { type TClassName } from '@/types';

type TProps = TClassName;

export default function Loading({ className }: TProps) {
  return (
    <div
      className={clsx(
        'fixed inset-0 z-[101] h-screen w-full bg-transparent',
        className
      )}
    >
      <Container className="h-full">
        <div className="grid h-full w-full items-center justify-center">
          <div className="grid gap-4 text-center">
            <div className="grid justify-center gap-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="gradient--lime h-4 w-4 animate-bounce rounded-full [animation-delay:-0.3s]" />
                <div className="gradient--lime h-4 w-4 animate-bounce rounded-full [animation-delay:-0.15s]" />
                <div className="gradient--lime h-4 w-4 animate-bounce rounded-full" />
              </div>

              <h3 className="sr-only">Loading...</h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
