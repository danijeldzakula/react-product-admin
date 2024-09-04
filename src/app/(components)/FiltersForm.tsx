import { useEffect } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';

import clsx from 'clsx';

import Button from '@/components/button/Button';

import {
  type TFilterState,
  initialFilterState,
  useFormStore,
} from '@/store/filters-store';
import { type TClassName } from '@/types';

type TProps = TClassName & {
  onClose?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export default function FiltersForm({ className, onClose }: TProps) {
  const {
    firstName,
    lastName,
    accept,
    setStringFilter,
    setBooleanFilter,
    initializeFilters,
  } = useFormStore();

  const { control, handleSubmit, setValue, reset } = useForm<TFilterState>({
    defaultValues: {
      ...initialFilterState,
    },
  });

  useEffect(() => {
    initializeFilters({ firstName, lastName, accept });
  }, [firstName, lastName, accept, initializeFilters]);

  useEffect(() => {
    Object.entries({ firstName, lastName, accept }).forEach(([key, value]) => {
      setValue(key as keyof TFilterState, value);
    });
  }, [firstName, lastName, accept, setValue]);

  const onChangeHandler =
    (name: keyof TFilterState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type, checked } = e.target;

      if (type === 'checkbox') {
        setBooleanFilter(name as 'accept', checked);
      } else {
        setStringFilter(name as 'firstName' | 'lastName', value);
      }
    };

  const onReset = () => {
    reset();
    onClose && onClose(false);
    initializeFilters({ ...initialFilterState });
  };

  const onSubmit: SubmitHandler<TFilterState> = (formValues) => {
    onClose && onClose(false);
    console.log(formValues);
  };

  return (
    <div className={clsx('grid gap-4', className)}>
      <div>
        <h4>Filters</h4>
      </div>

      <form
        className="grid gap-8 border-t border-neutral-200 py-4 dark:border-neutral-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder="First Name"
              className="w-full rounded-md border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-950"
              onChange={(e) => {
                field.onChange(e);
                onChangeHandler('firstName')(e);
              }}
            />
          )}
        />

        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Last Name"
              className="w-full rounded-md border border-neutral-200 bg-white p-2 dark:border-neutral-800 dark:bg-neutral-950"
              onChange={(e) => {
                field.onChange(e);
                onChangeHandler('lastName')(e);
              }}
            />
          )}
        />

        <Controller
          name="accept"
          control={control}
          render={({ field }) => {
            return (
              <Controller
                name={field.name}
                control={control}
                defaultValue={field.value}
                render={({ field }) => (
                  <label className="flex select-none items-center gap-2">
                    <input
                      className="h-4 w-4 select-none rounded-none border border-neutral-200 dark:border-neutral-800"
                      type="checkbox"
                      checked={field.value}
                      onChange={(e) => {
                        field.onChange(e);
                        onChangeHandler('accept')(e);
                      }}
                    />
                    Confirm action
                  </label>
                )}
              />
            );
          }}
        />

        <div className="flex gap-4">
          <Button
            onClick={() => onReset()}
            className=" w-full rounded-md p-2"
            type="button"
          >
            Reset
          </Button>

          <Button
            className="w-full rounded-md bg-blue-600 p-2 text-white"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
