import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

type TPosition = 'left' | 'right' | 'top' | 'bottom';

type TProps = TGlobalProps & {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  position?: TPosition;
};

export default function Sidebar({
  children,
  className,
  open = false,
  onClose,
  position = 'left',
}: TProps) {
  const positionClasses = clsx({
    'mr-auto h-full w-full max-w-xs data-[closed]:-translate-x-full':
      position === 'left',
    'ml-auto h-full w-full max-w-xs data-[closed]:translate-x-full':
      position === 'right',
    'mb-auto w-full h-auto data-[closed]:-translate-y-full': position === 'top',
    'mt-auto w-full h-auto data-[closed]:translate-y-full':
      position === 'bottom',
  });

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={clsx('relative z-40 lg:hidden')}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/60 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className={clsx('fixed inset-0 z-40 flex')}>
        <DialogPanel
          transition
          className={clsx(
            'relative flex transform flex-col overflow-y-auto border-r border-neutral-200 bg-white py-4 shadow-xl transition duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-950',
            positionClasses,
            className
          )}
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
