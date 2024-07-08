import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Impor Head dari next/head
import "../globals.css";
import { DEFAULT_METADATA } from "@/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_METADATA.url),
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
    images: [{ url: DEFAULT_METADATA.image }],
    locale: DEFAULT_METADATA.locale,
  },
  twitter: {
    card: "summary_large_image",
    creator: DEFAULT_METADATA.creator,
    site: DEFAULT_METADATA.siteName,
    title: DEFAULT_METADATA.creator,
    description: DEFAULT_METADATA.description,
    images: [{ url: DEFAULT_METADATA.image }],
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
        <title>{metadata.title ?? 'Default Title'}</title>
        <meta name="description" content={metadata.description ?? 'Default description'} />
        <meta name="keywords" content={metadata.keywords ?? 'default, keywords'} />
        <meta name="robots" content={metadata.robots ?? 'index, follow'} />
        <meta name="creator" content={metadata.creator ?? 'Default Creator'} />
        <meta name="author" content={metadata.authors?.name ?? 'Default Author'} />
        <meta name="author" content={metadata.authors?.url ?? 'https://default.url'} />
        <meta property="og:url" content={metadata.openGraph?.url?.toString() ?? 'https://default.url'} />
        <meta property="og:type" content={metadata.openGraph?.type ?? 'website'} />
        <meta property="og:site_name" content={metadata.openGraph?.siteName ?? 'Default Site Name'} />
        <meta property="og:description" content={metadata.openGraph?.description ?? 'Default description'} />
        <meta property="og:title" content={metadata.openGraph?.title ?? 'Default Title'} />
        <meta property="og:image" content={metadata.openGraph?.images?.[0]?.url ?? '/defaultImage.png'} />
        <meta property="og:locale" content={metadata.openGraph?.locale ?? 'en-US'} />
        <meta name="twitter:card" content={metadata.twitter?.card ?? 'summary'} />
        <meta name="twitter:creator" content={metadata.twitter?.creator ?? 'Default Creator'} />
        <meta name="twitter:site" content={metadata.twitter?.site ?? '@defaultsite'} />
        <meta name="twitter:title" content={metadata.twitter?.title ?? 'Default Title'} />
        <meta name="twitter:description" content={metadata.twitter?.description ?? 'Default description'} />
        <meta name="twitter:image" content={metadata.twitter?.images?.[0]?.url ?? '/defaultImage.png'} />
      </Head>
      <body className={inter.className}>
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
