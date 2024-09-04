import { useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

import clsx from 'clsx';

import Button from '@/components/button/Button';

import {
  buildQueryString,
  buildQueryStringFromCategories,
  parseCategoriesFromQueryString,
} from '@/utils/categories';

import { filtersData } from '@/shared/categories';
import { useCategoriesStore } from '@/store/categories-store';
import { type TClassName } from '@/types';

type TProps = TClassName & {
  onClose?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export default function CategoriesForm({ onClose, className }: TProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultValues = useMemo(() => {
    return filtersData.reduce(
      (acc, category) => {
        acc[category.id] = category.options.reduce(
          (subAcc, option) => {
            subAcc[option.value] = option.checked;
            return subAcc;
          },
          {} as Record<string, boolean>
        );
        return acc;
      },
      {} as Record<string, Record<string, boolean>>
    );
  }, [filtersData]);

  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues,
  });

  const { categories, setCategoryOptions, setFilters, getUpdatedCategories } =
    useCategoriesStore();

  useEffect(() => {
    if (searchParams.size) {
      const parseUrl = buildQueryString(searchParams);
      const filteredDataByUrl = parseCategoriesFromQueryString(
        parseUrl,
        filtersData
      );

      setCategoryOptions(filteredDataByUrl);
    } else {
      setCategoryOptions(filtersData);
    }
  }, [setCategoryOptions, searchParams]);

  useEffect(() => {
    categories.forEach((category) => {
      category.options.forEach((option) => {
        setValue(`${category.id}.${option.value}`, option.checked);
      });
    });
  }, [categories, setValue]);

  const onSubmit = () => {
    const updatedCategories = getUpdatedCategories();
    const searchParams = buildQueryStringFromCategories(updatedCategories);

    setSearchParams(searchParams);
    onClose && onClose(false);
  };

  const onReset = () => {
    reset(); // Reset React Hook Form for her defaultValues
    setCategoryOptions(filtersData); // Reset Zustand state with original filtersData
  };

  return (
    <form className={clsx('', className)} onSubmit={handleSubmit(onSubmit)}>
      {categories.map((filter) => (
        <div key={filter.id} className="mb-4 grid gap-4">
          <h3 className="border-b border-neutral-200 pb-4 text-xl font-normal dark:border-neutral-800">
            {filter.name}
          </h3>

          <div className="grid gap-1">
            {filter.options.map((option) => (
              <div key={option.value} className="mb-1 flex items-center">
                <Controller
                  name={`${filter.id}.${option.value}`}
                  control={control}
                  render={({ field }) => {
                    const checked = field.value as boolean;

                    return (
                      <label className="flex w-full items-center gap-3">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={checked}
                          onChange={() => {
                            setFilters(filter.id, option.value);
                          }}
                        />

                        <span className="block w-full">{option.label}</span>
                      </label>
                    );
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="flex gap-2 lg:grid xl:flex">
        <Button type="submit" className="w-full" variant="primary">
          Apply Filters
        </Button>

        <Button onClick={onReset} type="reset" className="w-full rounded p-2">
          Reset
        </Button>
      </div>
    </form>
  );
}
