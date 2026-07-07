import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malhotra Caterers | Best Catering Services in Kanpur",
  description:
    "Malhotra Caterers offers premium catering services in Kanpur for weddings, parties, and events. Delicious food, professional service, and unforgettable experience.",
  keywords: [
    "Malhotra Caterers",
    "Catering services Kanpur",
    "Wedding catering Kanpur",
    "Best caterers in Kanpur",
    "Event catering",
  ],
  authors: [{ name: "Malhotra Caterers" }],
  openGraph: {
    title: "Malhotra Caterers | Kanpur",
    description:
      "Premium catering services for weddings, parties, and events in Kanpur.",
    url: "https://www.malhotracaterers.org/",
    siteName: "Malhotra Caterers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malhotra Caterers | Kanpur",
    description: "Best catering services for weddings & events in Kanpur.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2761657055580047"
     crossorigin="anonymous" />
    </head>
      <body className="min-h-full flex flex-col font-sans" cz-shortcut-listen="true" suppressHydrationWarning>
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
