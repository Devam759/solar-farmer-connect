
import "./globals.css";

export const metadata = {
  title: "SolarSarthi - Government of Rajasthan",
  description: "Official portal for solar energy schemes in Rajasthan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-times text-base antialiased min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
} 
