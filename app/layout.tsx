import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirza Husic Portofolio",
  description:
    "Mirza Husic, a skilled Software Engineer specializing in React and Next.js, focused on creating fast, responsive, and user-friendly web applications",
  icons: "/mh.png",
  openGraph: {
    siteName: "mirzahusic.dev",
    url: `https://mirzahusic.dev`,
    title: "Mirza Husic Portofolio",
    description:
      "Mirza Husic, a skilled Software Engineer specializing in React and Next.js, focused on creating fast, responsive, and user-friendly web applications",
    images: ["/me.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
