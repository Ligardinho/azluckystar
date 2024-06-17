'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext<string | null>(null);

const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let storedUserId = localStorage.getItem('visitorId');
    if (!storedUserId) {
      storedUserId = generateUniqueId();
      localStorage.setItem('visitorId', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  return <UserContext.Provider value={userId}>{children}</UserContext.Provider>;
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };