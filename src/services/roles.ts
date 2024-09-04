import { rolesData } from '@/shared/roles';
import { type TRole } from '@/types/roles';

export const getAllRoles = async (): Promise<TRole[]> => {
  return await new Promise((resolve, _reject) => {
    resolve(rolesData);
  });
};
