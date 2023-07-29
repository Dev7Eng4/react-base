import React from 'react';

import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';

import LoginPage from 'app/pages/auth';

import Home from 'app/pages/codewithme/home';
import Notification from 'app/pages/codewithme/notification';

import Products from 'app/pages/fashionwithlove/products';
import ListUser from 'app/pages/codewithme/users';

import ProductDetail from 'app/pages/fashionwithlove/product-detail';
import { http } from 'service/axios-config';

import ErrorBoundary from 'app/pages/error';

import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: 'login',
  //       element: <Login />,
  //       loader: redirectIfUser,
  //     },
  //     {
  //       path: 'logout',
  //       action: logoutUser,
  //     },
  //   ],
  // },
  {
    path: '/account/login',
    element: <LoginPage />,
    //  loader: ({ request }) =>
    //       fetch("/api/dashboard.json", {
    //         signal: request.signal,
    //       }),
    //   },
  },
  {
    path: '/',
    element: <PrivateRoute />,
    children: [
      {
        path: 'codewithme',
        children: [
          {
            path: 'home',
            element: <Home />,
          },
          {
            path: 'users',
            element: <ListUser />,
          },
          {
            path: 'notification',
            element: <Notification />,
          },
        ],
      },
      {
        path: 'fashionwithlove',
        children: [
          {
            path: 'products',
            element: <Products />,
          },
          {
            path: 'products/:productId',
            element: <ProductDetail />,
            loader: async ({ params }) => {
              const product = await http.get(`/products/${params.productId}`);

              return defer({ product });
            },
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
