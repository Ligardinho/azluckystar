import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/components/user-context";
import { AnalyticsProvider } from "@/components/analytics-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AZ Lucky Star Automotive | Get a quote",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
        </UserProvider>
      </body>
    </html>
  );
}
