
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SolarSarthi - Government of Rajasthan",
  description: "Official portal for solar energy schemes in Rajasthan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-times antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
} 
