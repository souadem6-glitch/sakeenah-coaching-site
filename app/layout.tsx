import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakeenah Coaching | Gezins- en life coach Antwerpen",
  description: "Sakeenah Coaching biedt professionele gezins- en life coaching in Antwerpen. Gespecialiseerd in hoogbegaafdheid, ADHD en autisme. Islamitische coaching vanuit de waarden van de Quran en Soennah. Voor vrouwen, kinderen en jongeren.",
  keywords: "life coach Antwerpen, gezinscoaching Antwerpen, islamitische coach, islamitische coaching, islamitische therapeut, islamitische psychologie, coaching hoogbegaafdheid, coaching ADHD, coaching autisme, neurodiversiteit coach, moslim coach, life coaching, coach Antwerpen, psycholoog Antwerpen, therapeut Antwerpen",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  openGraph: {
    title: "Sakeenah Coaching | Gezins- en life coach Antwerpen",
    description: "Professionele gezins- en life coaching in Antwerpen. Gespecialiseerd in hoogbegaafdheid, ADHD en autisme. Islamitische coaching vanuit rust en oprechte betrokkenheid.",
    url: "https://sakeenah-coaching.be",
    siteName: "Sakeenah Coaching",
    locale: "nl_BE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}