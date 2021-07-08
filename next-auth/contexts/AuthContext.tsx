import * as React from 'react';
import Router from 'next/router';

import { api } from '../services/api';

type User = {
  email: string;
  permissions: string[];
  roles: string[];
};

type SignInCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  user: User;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = React.useState<User>();

  const isAuthenticated = Boolean(user);

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password,
      });

      const { permissions, roles, token, refreshToken } = response.data;

      setUser({
        email,
        permissions,
        roles,
      });

      Router.push('/dashboard');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
