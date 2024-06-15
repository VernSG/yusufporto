// Import yang diperlukan
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiDiscord } from "react-icons/si";
import getUserData, { ApiResponse } from "@/app/api/discordUser"; // Mengimport fungsi getUserData dan ApiResponse
import { PROFILE_PICTURE_URL } from "@/constants";

export default function Callsign({ display }: { display: string }) {
  const [userData, setUserData] = useState<ApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData("689131590319865973"); // Mengganti dengan Discord user ID yang diinginkan
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      // Ganti dengan endpoint Lanyard yang sesuai
      href={`https://api.lanyard.rest/v1/users/689131590319865973`}
      className={`cursor-pointer relative w-fit max-w-xs m-auto p-4 items-center gap-4 border__color rounded-md lg:w-52 ${display}`}
    >
      <div className="w-16">
        {isLoading ? (
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div> // Placeholder untuk gambar avatar saat loading
        ) : (
          <Image
            className="h-auto w-auto rounded-full"
            src={PROFILE_PICTURE_URL} // Mengakses avatar dari objek discord_user
            alt="DISCORD_PROFILE"
            width={64}
            height={64}
            priority
          />
        )}
      </div>

      <div className="flex-1">
        <p className="font-medium leading-tight">
          {isLoading ? (
            <div className="w-20 h-4 bg-gray-200 rounded"></div> // Placeholder untuk username saat loading
          ) : (
            `@${userData?.data.discord_user.username}`
          )}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? (
            <div className="w-16 h-3 bg-gray-200 rounded"></div> // Placeholder untuk status saat loading
          ) : (
            userData?.statusBeautify ?? 'Status not available'
          )}
        </p>
        <p className="mt-1 text-xs">
          {isLoading ? (
            <div className="w-16 h-3 bg-gray-200 rounded"></div> // Placeholder untuk status saat loading
          ) : (
            `Status: ${userData?.data.discord_status ?? 'Unknown'}`
          )}
        </p>
      </div>
      <div className="absolute bottom-1.5 right-1.5">
        <SiDiscord size={20} color={"#5865F2"} />
      </div>
    </a>
  );
}
