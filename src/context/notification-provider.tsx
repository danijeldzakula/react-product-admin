import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react/jsx-runtime';

import { type TChildren } from '@/types';

import { useTheme } from './theme-provider';

type TProps = TChildren;

export default function NotificationProvider({ children }: TProps) {
  const { theme } = useTheme();

  return (
    <Fragment>
      <ToastContainer theme={theme} />
      {children}
    </Fragment>
  );
}
