'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './user-context';
import { useScroll } from 'framer-motion';
import { getDeviceType, projectName } from '@/lib/utils';

const AnalyticsContext = createContext<number | null>(null);

const AnalyticsProvider = ({ children }: { children: React.ReactNode }) => {
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [deviceType, setDeviceType] = useState<string>('');

  const userId = useUser();
  const { scrollYProgress } = useScroll();
  
  const scrollProgress = scrollYProgress.get().toFixed(2);

  const saveToDb = async () => {
    if (!userId) return;

    const data = {
      visitorId: userId,
      stayDuration: timeSpent, // in seconds
      scrollProgress: scrollProgress,
      deviceType: deviceType, // Optional
      projectName: projectName
    };

    const response = await fetch('https://hundredllc-analytics.vercel.app/api/analytics/visitor-engagement', { // Adjust the endpoint if necessary
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'Melihisatycoon61' // Add the secret key to the headers
      },
      body: JSON.stringify(data)
    });
  }

  useEffect(() => {
    setDeviceType(getDeviceType());

    const intervalId = setInterval(() => {
      if (!isPaused) {
        const currentTime = Date.now();
        const timeSpentInSeconds = Math.floor((currentTime - startTime) / 1000);
        setTimeSpent(timeSpentInSeconds);
      }
    }, 1000);

    const handleBlur = () => {
      /* console.log('User left the site'); */
      saveToDb()

      setIsPaused(true);
      setStartTime(Date.now()); // Reset start time when pausing
    };

    const handleFocus = () => {
      /* console.log('User returned to the site'); */
      setIsPaused(false);
      setStartTime(Date.now() - timeSpent * 1000); // Adjust start time to account for the time already spent
    };

    const handleBeforeUnload = () => {
      /* console.log('User is closing the site'); */
      saveToDb()

      clearInterval(intervalId);
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [startTime, isPaused, timeSpent, userId]);

  return (
    <AnalyticsContext.Provider value={timeSpent}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const useAnalytics = () => useContext(AnalyticsContext);

export { AnalyticsProvider, useAnalytics };
