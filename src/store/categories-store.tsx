import { create } from 'zustand';

import { type TFilter } from '@/types/categories';

export type TFilterState = {
  categories: TFilter[];
};

export type TFilterActions = {
  setFilters: (filterId: string, value: string) => void;
  getUpdatedCategories: () => TFilter[];
  setCategoryOptions: (categories: TFilter[]) => void;
};

export const useCategoriesStore = create<TFilterState & TFilterActions>(
  (set, get) => ({
    categories: [],
    setFilters: (filterId, value) => {
      set((state) => {
        const categories = state.categories.map((category) => {
          if (category.id === filterId) {
            const options = category.options.map((option) => {
              if (option.value === value) {
                return {
                  ...option,
                  checked: !option.checked,
                };
              }

              return option;
            });

            return {
              ...category,
              options: options,
            };
          }

          return category;
        });

        return {
          categories,
        };
      });
    },
    getUpdatedCategories: () => {
      return get().categories;
    },
    setCategoryOptions: (categories) => {
      set(() => ({ categories }));
    },
  })
);
