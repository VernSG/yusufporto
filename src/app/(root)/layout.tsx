import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { DEFAULT_METADATA } from "@/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufsaputra.vercel.app/"),
  title: DEFAULT_METADATA.creator,
  robots: DEFAULT_METADATA.robots,
  keywords: DEFAULT_METADATA.keyword,
  description: DEFAULT_METADATA.description,
  creator: DEFAULT_METADATA.creator,
  authors: {
    name: DEFAULT_METADATA.creator,
    url: DEFAULT_METADATA.url,
  },
  openGraph: {
    url: DEFAULT_METADATA.url,
    type: "website",
    siteName: DEFAULT_METADATA.siteName,
    description: DEFAULT_METADATA.description,
    title: DEFAULT_METADATA.creator,
    images: DEFAULT_METADATA.image,
    locale: DEFAULT_METADATA.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: DEFAULT_METADATA.creator,
    site: DEFAULT_METADATA.siteName,
    title: DEFAULT_METADATA.creator,
    description: DEFAULT_METADATA.description,
    images: DEFAULT_METADATA.image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
