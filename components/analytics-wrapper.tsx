'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from './user-context';
import { projectName } from '@/lib/utils';

export default function AnalyticsWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [hoverTime, setHoverTime] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  const userId = useUser()

  const saveToDb = async (click?: boolean) => {
    if (!userId) return;

    if (click) {
      const data = {
        visitorId: userId,
        elementId: id,
        hoverDuration: hoverTime, // in seconds
        clickCount: 1, // Optional
        projectName: projectName
      };

      const response = await fetch('https://hundredllc-analytics.vercel.app/api/analytics/hover-element', { // Adjust the endpoint if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'Melihisatycoon61' // Add the secret key to the headers
        },
        body: JSON.stringify(data)
      });
    } else {
      const data = {
        visitorId: userId,
        elementId: id,
        hoverDuration: hoverTime, // in seconds
        projectName: projectName
      };

      const response = await fetch('https://hundredllc-analytics.vercel.app/api/analytics/hover-element', { // Adjust the endpoint if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'Melihisatycoon61' // Add the secret key to the headers
        },
        body: JSON.stringify(data)
      });
    }
  }


  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setInterval(() => {
        setHoverTime((prevTime) => prevTime + 0.25);
      }, 250);
    } else if (hoverTime > 0) {
      saveToDb()
/*       console.log(`Hovered for ${hoverTime.toFixed(2)} seconds over element with id: ${id}`); */
      setHoverTime(0);
    }
    return () => clearInterval(timer);
  }, [isHovered, hoverTime, id, userId]);

  return (
    <div
      id={id}
      onClick={() => saveToDb(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
