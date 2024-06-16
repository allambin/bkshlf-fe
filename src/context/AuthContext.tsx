import React, { createContext, useState, ReactNode, FC, useContext, useEffect } from 'react';

// Define the shape of the authentication context
interface AuthContextType {
  isLoggedIn: boolean;
  //saveToken: () => void;
  logout: () => void;
  login: (token: string) => void;
  // token: string|null;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the shape of the provider's props
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component to wrap around the application
const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem('token'));

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount


  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
