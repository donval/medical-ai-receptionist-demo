import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}