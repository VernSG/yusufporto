// Import necessary modules and components
"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Ping from "../elements/Ping";

// Define props interface for MusicCard
interface MusicCardProps {
  url: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
  audioSrc: string;
}

// MusicCard functional component
export default function MusicCard({
  url,
  title,
  description,
  image,
  imageAlt,
  audioSrc,
}: MusicCardProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(0.5); // Default volume is 50%
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);
    audioElement?.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement?.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
      setVolume(value);
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className={clsx(
        "border__color",
        "rounded-md",
        "bg-transparent shadow-lg",
        "transition-transform duration-200",
        "dark:bg-neutral-800 dark:shadow-none",
        "lg:hover:scale-[1.03]",
      )}
    >
      <Link
        href={url}
        rel="noopener noreferrer"
        aria-label={`Visit ${title} live production demo`}
        className={clsx("group cursor-pointer", "flex flex-col", "h-full")}
        legacyBehavior
      >
        <div className="relative h-72">
          <Image
            src={image}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className="rounded-t-md"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <Ping />

          <h1 className="flex items-center gap-1 font-bold md:text-lg">
            {title}
            <span className="transition-all duration-200 lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1">
              {isPlaying ? (
                <FaPause
                  onClick={togglePlay}
                  className="cursor-pointer text-blue-500 hover:text-blue-600"
                />
              ) : (
                <FaPlay
                  onClick={togglePlay}
                  className="cursor-pointer text-blue-500 hover:text-blue-600"
                />
              )}
            </span>
          </h1>
        </div>

        <p className="secondary my-4 text-sm leading-relaxed md:h-[91px]">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <div className="flex-grow">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="slider"
              style={{ width: "100%" }}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleVolumeChange(0)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {volume === 0 ? (
                <FaVolumeMute />
              ) : (
                <FaVolumeUp />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => handleVolumeChange(Number(e.target.value))}
              className="slider"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <audio ref={audioRef} src={audioSrc} />
      </div>
    </motion.li>
  );
}
