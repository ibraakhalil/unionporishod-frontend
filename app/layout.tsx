import TanstackProvider from "@/components/common/TanstackProvider";
import ToastProvider from "@/components/common/ToastProvider";
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
        <body>
          <ToastProvider>{children}</ToastProvider>
        </body>
      </TanstackProvider>
    </html>
  );
}
