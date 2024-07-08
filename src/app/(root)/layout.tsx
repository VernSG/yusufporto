import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";
import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import "../globals.css";
import { DEFAULT_METADATA } from "@/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yusufs.me"),
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
    <html lang={DEFAULT_METADATA.locale}>
      <Head>
        <title>{DEFAULT_METADATA.creator}</title>
        <meta name="description" content={DEFAULT_METADATA.description} />
        <meta name="keywords" content={DEFAULT_METADATA.keywords} />
        <meta name="robots" content={DEFAULT_METADATA.robots} />
        <meta name="creator" content={DEFAULT_METADATA.creator} />
        <meta name="author" content={DEFAULT_METADATA.creator} />
        <meta name="author" content={DEFAULT_METADATA.url} />
        <meta property="og:url" content={DEFAULT_METADATA.openGraph.url.toString()} />
        <meta property="og:type" content={DEFAULT_METADATA.openGraph.type} />
        <meta property="og:site_name" content={DEFAULT_METADATA.openGraph.siteName} />
        <meta property="og:description" content={DEFAULT_METADATA.openGraph.description} />
        <meta property="og:title" content={DEFAULT_METADATA.openGraph.title} />
        <meta property="og:image" content={DEFAULT_METADATA.openGraph.images[0].url} />
        <meta property="og:locale" content={DEFAULT_METADATA.openGraph.locale} />
        <meta name="twitter:card" content={DEFAULT_METADATA.twitter.card} />
        <meta name="twitter:creator" content={DEFAULT_METADATA.twitter.creator} />
        <meta name="twitter:site" content={DEFAULT_METADATA.twitter.site} />
        <meta name="twitter:title" content={DEFAULT_METADATA.twitter.title} />
        <meta name="twitter:description" content={DEFAULT_METADATA.twitter.description} />
        <meta name="twitter:image" content={DEFAULT_METADATA.twitter.images[0].url} />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
