// use client
import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { fetcher } from "@/services/fetcher";
import { SiDiscord } from "react-icons/si";
import useSWR from "swr";

interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
}

interface ApiResponse {
  data: {
    discord_user: DiscordUser;
    discord_status: string; // Menambahkan properti discord_status
    active_on_discord_mobile: boolean;
  };
  statusBeautify: string;
}

export default function Callsign({ display }: { display: string }) {
  const { data, error } = useSWR<ApiResponse>("/api/discord", fetcher);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href="https://discord.com/users/689131590319865973" // Link ke profil Discord atau halaman yang relevan
      className={`cursor-pointer relative w-fit max-w-xs m-auto p-4 items-center gap-4 border__color rounded-md lg:w-52 ${display}`}
    >
      <div className="w-16">
        {isLoading ? (
          <Skeleton variant="circular" width={64} height={64} sx={{ bgcolor: "grey.900" }} />
        ) : (
          <Image
            className="h-auto w-auto"
            src={`https://cdn.discordapp.com/avatars/689131590319865973/${data?.data.discord_user.avatar}`}
            alt="DISCORD_PROFILE"
            width={64}
            height={64}
            priority
          />
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {isLoading ? <Skeleton width="100px" /> : `@${data?.data.discord_user.username}`}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? <Skeleton width="80px" /> : data?.statusBeautify}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? (
            <Skeleton width="80px" />
          ) : (
            `Status: ${data?.data.discord_status}` // Menampilkan status Discord
          )}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiDiscord size={20} color={"#5865F2"} />
      </div>
    </Link>
  );
}
