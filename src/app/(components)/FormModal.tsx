import { Modal } from '@/components/modal/Modal';

import RoleForm from './RoleForm';

type TProps = {
  open: boolean;
  onOpenChange: (bool: boolean) => void;
};

export default function FormModal({ open, onOpenChange }: TProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <RoleForm open={open} onOpenChange={onOpenChange} />
    </Modal>
  );
}
