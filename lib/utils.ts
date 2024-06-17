import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviceType = () => {
  const userAgent =
    navigator.userAgent || (navigator as any).vendor || (window as any).opera;

  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
    return 'iOS';
  }

  if (/Macintosh/i.test(userAgent)) {
    return 'Mac';
  }

  if (/Windows/i.test(userAgent)) {
    return 'Windows';
  }

  if (/Linux/i.test(userAgent)) {
    return 'Linux';
  }

  return 'unknown';
};

export const projectName = 'Analytics Test Site'