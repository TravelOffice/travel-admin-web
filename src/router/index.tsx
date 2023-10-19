import { createBrowserRouter } from 'react-router-dom';
import Root from '@/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        lazy: async () => {
          const Component = await import('@/pages/Dashboard');
          return { Component: Component.default };
        },
      },
      {
        path: '/tenants',
        lazy: async () => {
          const Component = await import('@/pages/Tenants');
          return { Component: Component.default };
        },
      },
      {
        path: '/tenants/:id',
        lazy: async () => {
          const Component = await import('@/pages/Tenant');
          return { Component: Component.default };
        },
      },
    ],
  },
  {
    path: '/sign-in',
    lazy: async () => {
      const Component = await import('@/pages/Auth/SignIn');
      return { Component: Component.default };
    },
  },
]);

export default router;
