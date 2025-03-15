import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { DataProvider } from "@/context/ApiContext";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "Imtahan",
  description: "A platform for online exams",
};

const inter = Inter({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.className}
      data-mantine-color-scheme="light">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <DataProvider>
          <MantineProvider>{children}</MantineProvider>
        </DataProvider>
      </body>
    </html>
  );
}
