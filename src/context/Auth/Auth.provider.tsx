import React, { ReactElement, ReactNode, createContext, useReducer } from 'react';
import { authReducer } from './Auth.reducers';
import { AuthAction, AuthState } from './Auth.types';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
} | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};
