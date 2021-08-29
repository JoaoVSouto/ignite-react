import * as React from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { setupApiClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Dashboard() {
  const { user } = React.useContext(AuthContext);

  return <h1>dashboard!: {user?.email}</h1>;
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupApiClient(ctx);

  await apiClient.get('me');

  return {
    props: {},
  };
});
