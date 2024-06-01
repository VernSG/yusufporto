"use client";
import React, { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SiDiscord } from "react-icons/si";
import { ApiResponse } from "@/app/api/discordUser";
import { PROFILE_PICTURE_URL } from "@/constants";
import getUserData from "@/app/api/discordUser"; // Import fungsi getUserData

export default function Callsign({ display }: { display: string }) {
  const [userData, setUserData] = useState<ApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData("689131590319865973"); // Ganti dengan Discord user ID yang diinginkan
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://lanyard.rest/user/689131590319865973`} // Ganti dengan endpoint Lanyard yang sesuai
      className={`cursor-pointer relative w-fit max-w-xs m-auto p-4 items-center gap-4 border__color rounded-md lg:w-52 ${display}`}
    >
      <div className="w-16">
        {isLoading ? (
          <Skeleton variant="circular" width={64} height={64} sx={{ bgcolor: "grey.900" }} />
        ) : (
          <Image
  className="h-auto w-auto"
  src={PROFILE_PICTURE_URL} // Ganti '/path/to/default/avatar' dengan path default avatar Anda
 // Mengakses avatar dari objek discord_user
  alt="DISCORD_PROFILE"
  width={64}
  height={64}
  priority
/>
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {isLoading ? <Skeleton width="100px" /> : `@${userData?.data?.discord_user?.username}`}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? <Skeleton width="80px" /> : userData?.statusBeautify ?? 'Status not available'}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? (
  <Skeleton width="80px" />
) : (
  `Status: ${userData?.data?.discord_status ?? 'Unknown'}`
)}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiDiscord size={20} color={"#5865F2"} />
      </div>
    </Link>
  );
}
