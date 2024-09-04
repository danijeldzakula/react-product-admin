import { useState } from 'react';

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

import Button from '@/components/button/Button';

import { groupRolesByRoleName } from '@/utils/roles';

import CheckCircleIcon from '@/assets/icons/check-circle';
import InfoIcon from '@/assets/icons/info';
import TimesCircleIcon from '@/assets/icons/times-circle';
import TrashIcon from '@/assets/icons/trash';
import { useRolesStore } from '@/store/roles-store';
import { type TRolePayload } from '@/types/roles';

type TProps = {
  data: TRolePayload;
};

export default function RoleCard(props: TProps) {
  return <ToggleCard {...props} />;
}

function ToggleCard({ data: { id, name, roles } }: TProps) {
  const { removeRoles } = useRolesStore();

  const rolesData = groupRolesByRoleName(roles);

  const isDisabled = (str: string): boolean => {
    const isMatch = str.match(/^\s*super\s*admin\s*$/i);
    return isMatch && Array.from(isMatch) ? true : false;
  };

  const [toggle, setToggle] = useState(false);

  return (
    <div className="max-content rounded-md border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-normal md:text-base lg:text-xl xl:text-xl">
          {name}
        </h3>

        <div className="flex items-center gap-2">
          <Popover>
            {({ open, close }) => (
              <>
                <PopoverButton
                  disabled={isDisabled(name)}
                  className={clsx(
                    'flex h-8 w-8 items-center justify-center gap-2 text-red-500',
                    isDisabled(name) ? 'cursor-not-allowed opacity-50' : ''
                  )}
                >
                  <TrashIcon />
                </PopoverButton>

                <Transition
                  show={open}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <PopoverPanel
                    anchor="top"
                    className="flex flex-col rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 dark:bg-neutral-900"
                  >
                    {!isDisabled(name) && (
                      <div className="w-[300px] p-4">
                        <p className="mb-4 grid gap-2 text-center">
                          <span>Are you sure you want</span>

                          <span className="text-wrap">
                            to delete:
                            <span className="font-semibold"> "{name}" </span>
                            role?
                          </span>
                        </p>

                        <div className="flex items-center justify-center gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                          <Button
                            className="flex h-9 w-full items-center justify-center gap-2 rounded-md  bg-white px-2 py-1 transition-colors duration-200 ease-in dark:bg-neutral-900"
                            onClick={() => {
                              close();
                            }}
                          >
                            <span>Cancel</span>
                          </Button>

                          <Button
                            variant="danger"
                            className="flex h-9 w-full items-center justify-center gap-2"
                            onClick={() => {
                              !isDisabled(name) ? removeRoles(id) : null;
                              close();
                            }}
                          >
                            <TrashIcon />
                            <span>Delete</span>
                          </Button>
                        </div>
                      </div>
                    )}
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover>
            {({ open }) => (
              <>
                <PopoverButton className="flex h-8 w-8 items-center justify-center gap-2 text-blue-500">
                  <InfoIcon width={21} height={21} />
                </PopoverButton>

                <Transition
                  show={open}
                  enter="transition-opacity duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <PopoverPanel
                    anchor="top"
                    className="flex flex-col rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 dark:bg-neutral-900"
                  >
                    <p className="text-nowrap">More Details!</p>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>

          <Button
            type="button"
            className="flex h-8 w-8 items-center justify-center text-neutral-500"
            onClick={() => setToggle(!toggle)}
          >
            <ChevronDownIcon
              className={clsx('size-7', toggle && 'rotate-180')}
            />
          </Button>
        </div>
      </div>

      <div
        className={clsx(
          'mb-4 grid gap-4 divide-y divide-neutral-200 dark:divide-neutral-800',
          !toggle ? ' hidden' : ''
        )}
      >
        {rolesData &&
          Object.entries(rolesData).map(([key, roles], idx) => {
            return (
              <div
                className="flex flex-wrap items-center justify-start gap-4 pt-4"
                key={idx}
              >
                <p>{key}</p>

                <ul className="flex flex-wrap justify-start gap-2">
                  {roles.map((role) => {
                    const classNameBadge = role.label.toLowerCase();

                    return (
                      <li
                        key={role.id}
                        className={clsx(
                          `badge flex items-center gap-2 text-[13px] badge-${classNameBadge}`
                        )}
                      >
                        <span>
                          {role.checked ? (
                            <CheckCircleIcon width={18} height={18} />
                          ) : (
                            <TimesCircleIcon width={18} height={18} />
                          )}
                        </span>

                        <span>{role.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}
