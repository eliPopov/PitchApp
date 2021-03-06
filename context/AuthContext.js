import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { API_URL } from '../config/index';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, serUser] = useState(null);
  const [error, serError] = useState(null);

  // Register user
  const register = async ({ user }) => {
    console.log(user);
  };
  //Login user
  const login = async ({ email: identifier, password }) => {
    console.log(identifier);
    console.log(password);
  };
  //Logout user
  const logout = async () => {
    console.log('Log out');
  };
  //Check if user is logged in
  const checkLoggedIn = async (user) => {
    console.log('Check');
  };

  return (
    <AuthContext.Provider value={{ user, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
