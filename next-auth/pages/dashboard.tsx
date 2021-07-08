import * as React from 'react';

import { AuthContext } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user } = React.useContext(AuthContext);

  return <h1>dashboard!: {user?.email}</h1>;
}
