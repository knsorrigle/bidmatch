import { createContext, useContext, useState, createElement } from 'react';
import type { ReactNode } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return createElement(AuthContext.Provider, { value: { isLoggedIn, setLoggedIn } }, children);
}

export function useAuth() {
  return useContext(AuthContext);
}
