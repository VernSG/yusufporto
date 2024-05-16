"use client";
import { fetcher } from "@/services/fetcher";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

export default function SpotifyCard({ display }: { display: string }) {
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <Link
      target="_blank"
      rel="noopener noreferer"
      href={
        data?.isPlaying
          ? data.songUrl
          : "https://open.spotify.com/user/lsueq1b4orsqlp76zdngw8yb0?si=a426a6f57ace450a"
      }
      className={clsx(
        display,
        "cursor-pointer",
        "relative w-fit max-w-xs",
        "m-auto p-4",
        "items-center gap-4",
        "border__color rounded-md",
        "lg:w-52",
      )}
    >
      <div className="w-16">
        {data?.isPlaying ? (
          <Image
            className="h-auto w-auto"
            src={data.albumImageUrl}
            alt={data.album}
            width={64}
            height={64}
            priority
          />
        ) : (
          <SiSpotify size={64} color={"#1ED760"} />
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {data?.isPlaying ? data.title : "Not Listening"}
        </p>
        <p className="mt-1 text-xs">
          {data?.isPlaying ? data.artist : "Spotify"}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiSpotify size={20} color={"#1ED760"} />
      </div>
    </Link>
  );
}
