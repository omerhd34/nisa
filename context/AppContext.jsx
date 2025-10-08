'use client';

import { createContext, useState, useContext } from 'react';

const AppContext = createContext(undefined);

export const useAppContext = () => {
 const context = useContext(AppContext);
 if (context === undefined) {
  throw new Error('useAppContext must be used within AppProvider');
 }
 return context;
};

export const AppProvider = ({ children }) => {
 const [theme, setTheme] = useState('light');

 const toggleTheme = () => {
  setTheme(prev => prev === 'light' ? 'dark' : 'light');
 };

 const value = {
  theme,
  toggleTheme,
 };

 return (
  <AppContext.Provider value={value}>
   {children}
  </AppContext.Provider>
 );
};

export default AppContext;