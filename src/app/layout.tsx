import type { Metadata } from "next";
import { Epilogue } from 'next/font/google';
import "./globals.css";
import { APP_NAME, APP_DES } from "@/constants/app.constant"
import ReduxProvider from "@/providers/ReduxProvider"

export const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-epilogue', // <-- thêm dòng này
});


export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DES,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable}`}
      >
        <ReduxProvider >
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
