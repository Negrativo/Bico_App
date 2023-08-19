import React, { useState, useContext, createContext, useEffect } from 'react';
import { UsuarioDTO } from '../dtos/UsuarioDTO';
import { login } from '../service/loginService/LoginService';
import { onSignIn, onSignOut, UserSignedIn } from '../service/auth';

interface UserContextData {
  user: UsuarioDTO | null;
  setUser: React.Dispatch<React.SetStateAction<UsuarioDTO | null>>;
  LoginUser: (email: string, password: string) => Promise<void>;
  LogoutUser: () => void;
}

const UserContext = createContext<UserContextData>({
  user: null,
  setUser: () => { },
  LoginUser: async (email: string, password: string) => { },
  LogoutUser: () => { }
});

interface UserProviderProps {
  children?: React.ReactNode;
}

export const useUser = (): UserContextData => useContext(UserContext);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UsuarioDTO | null>(null);

  useEffect(() => {
    UserSignedIn()
      .then(hasUser => {
        if (!!hasUser) {
          setUser(hasUser);
        }
      })
  })

  const LoginUser = async (email: string, senha: string) => {
    const user = await login(email, senha);
    setUser(user);
    onSignIn(user);
  }

  const LogoutUser = () => {
    setUser(null);
    onSignOut();
  }

  const value = { user, setUser, LoginUser, LogoutUser };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};