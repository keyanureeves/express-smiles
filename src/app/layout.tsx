import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Express Smiles Dental Suite | Best Dental Clinic in Nairobi, Kenya",
  description: "Express Smiles Dental Suite - Your trusted dental clinic in Nairobi. Expert dental care including implants, braces, root canal, teeth whitening, and emergency services. Open 7 days a week. Book today!",
  keywords: "dentist in nairobi, nairobi dentist, dental clinic in nairobi, best dentist nairobi, dentist near me nairobi, affordable dentist nairobi, teeth whitening nairobi, root canal nairobi, dental implants nairobi, orthodontist nairobi, kids dentist nairobi, emergency dentist nairobi, kenya dentist",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Express Smiles Dental Suite | Best Dental Clinic in Nairobi, Kenya",
    description: "Express Smiles Dental Suite - Your trusted dental clinic in Nairobi. Expert dental care including implants, braces, root canal, teeth whitening, and emergency services.",
    type: "website",
    locale: "en_KE",
    alternateLocale: "en_US",
    url: "https://expresssmilesdental.com",
    siteName: "Express Smiles Dental Suite",
  },
  alternates: {
    languages: {
      "en-KE": "https://expresssmilesdental.com",
      "x-default": "https://expresssmilesdental.com",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}