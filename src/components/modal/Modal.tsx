import { DialogTitle } from '@radix-ui/react-dialog';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import { type TChildren } from '@/types';

type TProps = TChildren & {
  open: boolean;
  onOpenChange: (bool: boolean) => void;
};

export function Modal({ children, open, onOpenChange }: TProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-auto max-h-screen w-full max-w-full overflow-y-auto sm:max-h-[calc(100svh_-_40px)] sm:max-w-[484px]">
        <DialogTitle className="px-4 pt-4 text-xl">Create New Role</DialogTitle>

        {children}
      </DialogContent>
    </Dialog>
  );
}
