import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { Home } from '@/app';

import { NotFoundError } from './app/Error';
import { Categories } from './app/categories';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        {/* All Non-protected route */}
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />

        {/* Catch all routes */}
        <Route path="*" element={<NotFoundError />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
