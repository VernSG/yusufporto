import Image from "next/image";
import Link from "next/link";

export default function DonateBox({ classname }: { classname: string }) {
  return (
    <div className={`${classname} m-auto mt-4 h-auto`}>
      <Link
        href=""
        aria-label="give support to this website"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <Image
          src="https://res.cloudinary.com/dqqmzgesp/image/upload/v1697204928/personal-website/donateGif.gif"
          alt="donate box gif"
          width={650}
          height={180}
        />
      </Link>
    </div>
  );
}
