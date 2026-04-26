import "./globals.css";

export const metadata = {
  title: "AI Receptionist",
  description: "AI receptionist demo app",
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