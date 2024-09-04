import { useState } from 'react';

import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import clsx from 'clsx';

import Button from '@/components/button/Button';
import { Container } from '@/components/layouts';
import Sidebar from '@/components/sidebar/Sidebar';

import { useCategoriesStore } from '@/store/categories-store';

import CategoriesForm from './CategoriesForm';
import FiltersForm from './FiltersForm';

export default function Arrivals() {
  const [open, setOpen] = useState(false);

  const { categories } = useCategoriesStore();

  return (
    <div>
      <Sidebar open={open} onClose={setOpen}>
        <FiltersForm onClose={setOpen} className="hidden px-4 lg:px-0" />

        <CategoriesForm onClose={setOpen} className="px-4" />
      </Sidebar>

      <Container>
        <div className="flex items-baseline justify-between border-b border-neutral-200 pb-6 pt-24 dark:border-neutral-800">
          <h2 className="text-2xl font-normal tracking-tight text-black dark:text-white">
            Arrivals
          </h2>

          <div className="flex items-center gap-4">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex h-8 items-center justify-center px-4 text-sm font-medium text-black dark:text-white">
                  Sort
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-neutral-900"
              >
                <div className="p-4">Sort By</div>
              </MenuItems>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex h-8 items-center justify-center px-4 text-sm font-medium text-black dark:text-white">
                  Layout
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in dark:bg-neutral-900"
              >
                <div className="p-4">Col</div>
                <div className="p-4">Row</div>
              </MenuItems>
            </Menu>

            <Button
              type="button"
              onClick={() => setOpen(true)}
              className="group inline-flex h-8 items-center justify-center px-4 text-sm font-medium text-black lg:hidden dark:text-white"
            >
              <span className="sr-only">Filters</span>
              <span>Filters</span>
            </Button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <aside className="hidden border-r border-neutral-200 pr-4 lg:block dark:border-neutral-800">
              <FiltersForm className="hidden" />

              <CategoriesForm />
            </aside>

            <div className="lg:col-span-3">
              {categories.map((category) => {
                const isSelectedOptions = category.options.some(
                  ({ checked }) => checked
                );

                if (!isSelectedOptions) {
                  return null;
                }

                return (
                  <div key={category.id}>
                    <h3>{category.name}</h3>

                    <ul>
                      {category.options.map((option, idx) => {
                        return (
                          <li key={idx}>
                            <span
                              className={clsx(
                                !option.checked
                                  ? 'text-red-500 line-through'
                                  : 'text-green-700'
                              )}
                            >
                              {option.label}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
