import * as React from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { setupApiClient } from '../services/api';
import { useCan } from '../hooks/useCan';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Dashboard() {
  const { user } = React.useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list'],
  });

  return (
    <>
      <h1>dashboard!: {user?.email}</h1>

      {userCanSeeMetrics && <div>Métricas</div>}
    </>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupApiClient(ctx);

  await apiClient.get('me');

  return {
    props: {},
  };
});
