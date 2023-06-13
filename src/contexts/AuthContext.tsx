import { createContext, useState } from "react";

interface AuthContextData {
  auth: string;
  saveToken: (token: string) => void;
  removeToken: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const authLocalStorage = localStorage.getItem("token");

  const [auth, setAuth] = useState<string>(
    authLocalStorage ? authLocalStorage : ""
  );

  const saveToken = (receivedToken: string) => {
    if (receivedToken != auth) {
      setAuth(receivedToken);
      localStorage.setItem("token", receivedToken);
    }
  };

  const removeToken = () => {
    setAuth("");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, saveToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
