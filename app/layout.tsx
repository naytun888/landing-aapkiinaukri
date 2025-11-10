import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "../components/MetaPixel";   // ← changed

export const metadata: Metadata = {
  title: "Aapki In Naukri — Earn Online, Start Today",
  description: "No experience needed. Flexible hours, daily payouts. Start earning from your smartphone today.",
  openGraph: { title: "Aapki In Naukri — Earn Online, Start Today", description: "No experience needed. Flexible hours, daily payouts.", url: "https://aapkiinaukri.com", type: "website" },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
