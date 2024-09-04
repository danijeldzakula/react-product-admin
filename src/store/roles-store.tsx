import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { type TRolePayload } from '@/types/roles';

type TState = {
  data: TRolePayload[];
};

type TRoleActions = {
  addPayload: (payload: TRolePayload) => void;
  removeRoles: (id: string) => void;
  updatePayload: (index: number, payload: TRolePayload) => void;
};

export const useRolesStore = create<TState & TRoleActions>()(
  devtools(
    persist(
      (set) => ({
        data: [],

        addPayload: (payload: TRolePayload) => {
          set((state) => ({ data: [...state.data, payload] }));
        },
        removeRoles: (roleId: string) => {
          set((state) => ({
            data: [...state.data].filter(({ id }) => id !== roleId),
          }));
        },
        updatePayload: (index: number, payload: TRolePayload) => {
          set((state) => {
            const newData = [...state.data];
            newData[index] = payload;
            return { data: [...state.data] };
          });
        },
      }),
      {
        name: 'roles-store', // The name of the storage key
      }
    ),
    { name: 'RolesStore' }
  )
);
