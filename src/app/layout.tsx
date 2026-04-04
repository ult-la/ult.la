import "./globals.css";
import React from "react";
import MainLayout from "@/layouts/MainLayout";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ModalProvider } from "@/contexts/ModalContext";
import AuthModal from "@/components/auth/AuthModal";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: "'Pretendard Variable', sans-serif" }}>
        <ThemeProvider>
          <ModalProvider>
            <MainLayout>{children}</MainLayout>
            <AuthModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
