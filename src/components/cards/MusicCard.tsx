"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import * as React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import Ping from "../elements/Ping";

export default function MusicCard({
  url,
  title,
  description,
  image,
  imageAlt,
  audioSrc,
}: MusicCardProps & { audioSrc: string }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
      }
    };

    audioElement?.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener("timeupdate", handleTimeUpdate);
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

  const handleSkip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const formatted = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    return formatted;
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
        <div>
        <Image
  className="h-auto w-auto rounded-t-md"
  width={1920}
  height={1080}
  src={image}
  alt={imageAlt}
  loading="lazy"
  aria-label={`Live ${title} Production Screenshot`}
  layout="responsive"
  objectFit="cover"
/>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <Ping />

          <h1 className="flex items-center gap-1 font-bold md:text-lg">
            {title}
            <span
              className={clsx(
                "transition-all duration-200",
                "lg:group-hover:-translate-y-1 lg:group-hover:translate-x-1",
              )}
            >
              <TbArrowUpRight />
            </span>
          </h1>
        </div>

        <p className="secondary my-4 text-sm leading-relaxed md:h-[91px]">
          {description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <button
            onClick={togglePlay}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
          <div className="flex items-center gap-2">
            <span>{formatTime(currentTime)}</span>
            <button
              onClick={() => handleSkip(-10)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              -10s
            </button>
            <button
              onClick={() => handleSkip(10)}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              +10s
            </button>
          </div>
          <audio ref={audioRef} src={audioSrc} />
        </div>
      </div>
    </motion.li>
  );
}

interface MusicCardProps {
  url: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  imageAlt: string;
}
