import PageTitle from "@/components/elements/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Statistics | Muhammad Yusuf",
  description: "Metadata statistics of andreavindra.vercel.app blogs",
  alternates: {
    canonical: "https://yusufsaputra.vercel.app/statistics",
  },
};

export default function Statistics() {
  return (
    <div className="p-8">
      <PageTitle title="Statistics" description="Blogs statistics" />
      <section></section>
    </div>
  );
}
