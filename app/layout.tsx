import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "プロパゲート - Webサイト制作",
  description: "最短2週間、スマホでも管理できるWebサイト制作サービス",
  generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}