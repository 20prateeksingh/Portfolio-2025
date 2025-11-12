import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prateek Singh - Portfolio",
  description: "Portfolio website showcasing work and case studies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

