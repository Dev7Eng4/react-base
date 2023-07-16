import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import Loadable from 'react-loadable';

import Layout from 'app/layout';
import CircularStatic from 'app/progress';
import { getAccessToken } from 'store/authStore';

const HomePage = Loadable({
  loader: () => import('../pages/home'),
  loading: () => <Skeleton animation="wave" />,
});

const PrivateRoute = () => {
  const navigate = useNavigate();

  // const isAuthenticated = !!getAccessToken();

  // if (!isAuthenticated) navigate('/account/login');

  return (
    <Layout>
      {/* <CircularStatic /> */}
      <HomePage />
    </Layout>
  );
};

export default PrivateRoute;
