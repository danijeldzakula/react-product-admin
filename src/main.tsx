import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';
import Loading from './components/loading/Loading.tsx';
import NotificationProvider from './context/notification-provider.tsx';
import { ThemeProvider } from './context/theme-provider.tsx';
import './globals.css';
import i18n from './i18n.ts';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <NotificationProvider>
          <QueryClientProvider client={queryClient}>
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </QueryClientProvider>
        </NotificationProvider>
      </ThemeProvider>
    </I18nextProvider>
  </StrictMode>
);
