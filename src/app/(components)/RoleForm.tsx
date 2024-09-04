import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button/Button';

import { groupRolesByRoleName } from '@/utils/roles';

import TimesCircleIcon from '@/assets/icons/times-circle';
import { getAllRoles } from '@/services/roles';
import { useRolesStore } from '@/store/roles-store';
import { type TRolePayload, rolesSchema } from '@/types/roles';

type TProps = {
  open: boolean;
  onOpenChange: (bool: boolean) => void;
};

export default function RoleForm({ onOpenChange }: TProps) {
  const { data: storedRoles, addPayload } = useRolesStore();

  const { data, isSuccess, isError, isLoading, refetch } = useQuery({
    queryKey: ['get-all-roles'],
    queryFn: () => getAllRoles(),
  });

  const initialValues = { id: uuidv4(), name: '', roles: [] };

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    resetField,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm<TRolePayload>({
    resolver: zodResolver(rolesSchema),
    defaultValues: initialValues,
  });

  useEffect(() => {
    if (isSuccess && data) {
      setValue('roles', data);
    }

    return () => {
      setValue('roles', []);
    };
  }, [isSuccess, data, setValue]);

  const findRoleByName = (currentName: string) => {
    return storedRoles.some(
      ({ name }) => name.trim().toLowerCase() === currentName
    );
  };

  const onSubmit = (form: TRolePayload) => {
    const isRoleNameTaken = findRoleByName(form.name.trim().toLowerCase());

    if (isRoleNameTaken) {
      // ! ERROR: this name is taken from database
      return setError('name', {
        type: 'manual',
        message: 'This name is already in use!',
      });
    }

    // ? INFO: Create new role
    addPayload(form);
    setTimeout(() => {
      onOpenChange(false);
    }, 0);
  };

  const handleCancel = async () => {
    await refetch();
    resetField('name');
    onOpenChange(false);
  };

  const roleName = watch('name');

  useEffect(() => {
    const isRoleNameTaken = findRoleByName(roleName.trim().toLowerCase());

    if (isRoleNameTaken) {
      setTimeout(() => {
        setError('name', {
          type: 'manual',
          message: 'This name is already in use!',
        });
      }, 100);
    } else {
      clearErrors('name');
    }

    return () => {
      clearErrors('name');
    };
  }, [storedRoles, roleName]);

  const roles =
    isSuccess && Array.isArray(data) ? groupRolesByRoleName(data) : null;

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4">
        <label className="mb-4 grid gap-4">
          <span>Name:</span>

          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <>
                <div className="relative">
                  <input
                    {...field}
                    type="text"
                    className={clsx(
                      'w-full rounded-md  border border-neutral-200 px-4 py-2 dark:border-neutral-800',
                      errors.name ? '!border-red-500 !outline-red-500' : ''
                    )}
                    placeholder="Enter role name"
                  />

                  {roleName.length ? (
                    <Button
                      className="absolute bottom-0 right-0 top-0 flex w-10 items-center justify-center"
                      type="button"
                      onClick={() => resetField('name')}
                    >
                      <TimesCircleIcon width={18} height={18} />
                    </Button>
                  ) : null}
                </div>

                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </>
            )}
          />
        </label>

        <div className="roles-list mb-4 grid gap-4">
          {roles &&
            Object.entries(roles).map(([key, values], idx) => {
              return (
                <div className="grid gap-4" key={idx}>
                  <p>{key}:</p>

                  <div className="role-list-item grid grid-cols-1 gap-4 pb-4 sm:grid-cols-4">
                    {values.map((role) => {
                      const index = +role.id - 1;

                      return (
                        <div key={role.id}>
                          <Controller
                            name={`roles.${index}.checked`}
                            control={control}
                            defaultValue={role.checked}
                            render={({ field }) => (
                              <label className="flex select-none items-center gap-2">
                                <input
                                  className="h-4 w-4 select-none rounded-none border border-neutral-200 dark:border-neutral-800"
                                  type="checkbox"
                                  checked={field.value ?? false}
                                  onChange={field.onChange}
                                />
                                {role.label}
                              </label>
                            )}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <div className="sticky -bottom-[1px] left-0 right-0 w-full border-t border-neutral-200 p-4 backdrop-blur-md dark:border-neutral-800">
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={handleCancel}
            className="w-full rounded-md px-4 py-2"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
}
