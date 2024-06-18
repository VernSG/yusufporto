import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa"; // Import icon components
import Ping from "../elements/Ping";

export default function MusicCard({
  url,
  title,
  description,
  image,
  imageAlt,
  audioSrc,
  stopPrevious,
}: MusicCardProps & { audioSrc: string; stopPrevious?: boolean }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
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
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        if (stopPrevious) {
          const allAudioElements = document.querySelectorAll('audio');
          allAudioElements.forEach(element => {
            if (element !== audioElement) {
              element.pause();
            }
          });
        }
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSkip = (amount: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += amount;
    }
  };

  const handleSeek = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
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
              {isPlaying ? (
                <FaPause onClick={togglePlay} className="cursor-pointer text-blue-500 hover:text-blue-600" />
              ) : (
                <FaPlay onClick={togglePlay} className="cursor-pointer text-blue-500 hover:text-blue-600" />
              )}
            </span>
          </h1>
        </div>

        <p className="secondary my-4 text-sm leading-relaxed md:h-[91px]">
          {description}
        </p>

        <div className="flex items-center justify-center gap-4 mt-4">
          <FaBackward onClick={() => handleSkip(-10)} className="cursor-pointer text-gray-400 hover:text-gray-600" />
          <div className="flex items-center w-full">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => handleSeek(Number(e.target.value))}
              className="slider"
              style={{ width: "100%" }}
            />
            <div className="flex justify-between">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
          <FaForward onClick={() => handleSkip(10)} className="cursor-pointer text-gray-400 hover:text-gray-600" />
        </div>
        <audio ref={audioRef} src={audioSrc} />
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
  stopPrevious?: boolean;
}
