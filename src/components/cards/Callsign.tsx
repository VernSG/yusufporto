"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SiDiscord } from "react-icons/si";
import getUserData from "@/app/api/discordUser";
import { ApiResponse } from "@/types";
import { PROFILE_PICTURE_URL } from "@/constants";

export default function Callsign({ display }: { display: string }) {
  const [userData, setUserData] = useState<ApiResponse | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData("689131590319865973"); //paste ur id here :V
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
      href={`https://yusufs.me/blog`}
      className={`relative m-auto flex max-w-xs flex-col items-center rounded-md border border-gray-300 bg-white p-3 shadow-sm transition-shadow hover:shadow-md ${display}`}
    >
      <div className="mb-3">
        {isLoading ? (
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        ) : (
          <Image
            className="h-10 w-10 rounded-full"
            src={PROFILE_PICTURE_URL}
            alt="DISCORD_PROFILE"
            width={40}
            height={40}
            priority
          />
        )}
      </div>

      <div className="text-center">
        <p className="text-sm font-medium text-gray-800">
          {isLoading ? (
            <div className="h-3 w-16 rounded bg-gray-200"></div>
          ) : (
            `@${userData?.data.discord_user.username}`
          )}
        </p>
        <p className="text-xs text-gray-600">
          {isLoading ? (
            <div className="h-2 w-12 rounded bg-gray-200"></div>
          ) : (
            userData?.statusBeautify ?? "Status not available"
          )}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          {isLoading ? (
            <div className="h-2 w-14 rounded bg-gray-200"></div>
          ) : (
            `Status: ${userData?.data.discord_status ?? "Unknown"}`
          )}
        </p>
      </div>

      <div className="mt-3 w-full space-y-1">
        {isLoading ? (
          <div className="h-3 w-24 rounded bg-gray-200"></div>
        ) : (
          userData?.data.activities.map((activity) => (
            <div
              key={activity.id}
              className="flex flex-col items-start rounded-md p-2 text-xs text-gray-700"
            >
              <p>
                <strong>Activity:</strong> {activity.name}
              </p>
              {activity.details && <p>{activity.details}</p>}
              {activity.state && <p>{activity.state}</p>}
              {/* Uncomment jika ingin menampilkan gambar */}
              {/* {activity.assets?.large_image && (
                <Image
                  src={`https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`}
                  alt={activity.assets.large_text || "Activity Image"}
                  width={32}
                  height={32}
                  className="rounded"
                />
              )} */}
            </div>
          ))
        )}
      </div>

      {/* Discord Icon */}
      <div className="absolute bottom-2 right-2">
        <SiDiscord size={18} color="#5865F2" />
      </div>
    </a>
  );
}
