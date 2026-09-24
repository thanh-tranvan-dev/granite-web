import type { Metadata } from "next";
import { Header, Footer, ContactBar } from "@/components/SiteChrome";
import { site } from "@/config/site";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});
const headingFont = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.businessName} | Gia công, thi công đá`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: site.businessName,
    title: site.businessName,
    description: site.description,
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactBar />
      </body>
    </html>
  );
}
