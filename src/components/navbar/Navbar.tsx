import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { type TGlobalProps } from '@/types';

type TProps = TGlobalProps;

export default function Navbar({ className }: TProps) {
  return (
    <nav className={clsx('', className)}>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx('block px-4 py-2', isActive ? 'text-red-500' : '')
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              clsx('block px-4 py-2', isActive ? 'text-red-500' : '')
            }
          >
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
