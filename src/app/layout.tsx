import type { Metadata } from "next";
import "./globals.css";
import { APP_NAME, APP_DES } from "@/constants/app.constant";
import ReduxProvider from "@/providers/ReduxProvider";
import { epilogue } from "./fonts";
import Header from "@/components/Header";
import StoreLocator from "@/components/StoreLocator"
import Footer from "@/components/Footer";


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
      <body className={`${epilogue.variable} antialiased`}>
        <ReduxProvider>
          <Header />
          <main>
            {children}
          </main>
          <StoreLocator />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
