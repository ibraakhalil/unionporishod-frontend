import TanstackProvider from "@/components/common/TanstackProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Union Porishodh",
  description: "Website of Union Porishodh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TanstackProvider>
        <body>{children}</body>
      </TanstackProvider>
    </html>
  );
}
