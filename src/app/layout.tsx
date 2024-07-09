import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Providers } from "./provider";
import MainLayout from "./components/MainLayout/mainLayout";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "Quest",
  description: "Generated by create next app",
};

export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html lang="en">
      <body>
        <Providers>
        <MainLayout>
        { children }
        </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
