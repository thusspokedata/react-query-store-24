import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import './index.css';
import { TanStackProvider } from './plugins/TanStackProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </main>
      </NextUIProvider>
    </TanStackProvider>
  </React.StrictMode>
);
