import * as React from 'react';

import { AuthContext } from '../contexts/AuthContext';

type UseCanParams = {
  permissions?: string[];
  roles?: string[];
};

export function useCan({ permissions, roles }: UseCanParams) {
  const { user, isAuthenticated } = React.useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every(permission =>
      user.permissions.includes(permission)
    );

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasSomeRole = roles.some(role => user.roles.includes(role));

    if (!hasSomeRole) {
      return false;
    }
  }

  return true;
}
