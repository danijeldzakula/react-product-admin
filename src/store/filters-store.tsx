import { create } from 'zustand';

export type TFilterState = {
  firstName: string;
  lastName: string;
  accept: boolean;
};

export type TFilterActions = {
  setStringFilter: (name: 'firstName' | 'lastName', value: string) => void;
  setBooleanFilter: (name: 'accept', value: boolean) => void;
  initializeFilters: (filters: TFilterState) => void;
};

export const initialFilterState: TFilterState = {
  firstName: '',
  lastName: '',
  accept: false,
};

export const useFormStore = create<TFilterState & TFilterActions>((set) => ({
  ...initialFilterState,
  setStringFilter: (name, value) =>
    set((state) => ({ ...state, [name]: value })),
  setBooleanFilter: (name, value) =>
    set((state) => ({ ...state, [name]: value })),
  initializeFilters: (filters) => {
    set(() => filters);
  },
}));
