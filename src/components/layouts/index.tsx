import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";
import Bottombar from "./Bottombar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextTopLoader
        color="#B3FFAB"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #B3FFAB,0 0 5px #12FFF7"
      />

      <div
        className={clsx(
          "md:flex",
          "lg:m-auto lg:max-w-5xl",
          "lg:justify-center",
        )}
      >
        <Sidebar />

        <div className="lg:max-w-5xl">
          <main>{children}</main>
          <Bottombar />
          <Footer />
        </div>
      </div>
    </>
  );
}
