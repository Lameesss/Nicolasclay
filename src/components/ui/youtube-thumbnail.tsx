"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { YouTubePlayer } from "./youtube-player";

interface YouTubeThumbnailProps {
  videoId: string;
  title?: string;
  className?: string;
  customThumbnail?: string;
}

export const YouTubeThumbnail = ({
  videoId,
  title = "Video",
  className = "",
  customThumbnail,
}: YouTubeThumbnailProps) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  // Use custom thumbnail if provided, otherwise use YouTube thumbnail URL (high quality)
  const thumbnailUrl = customThumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <button
        onClick={() => setIsPlayerOpen(true)}
        style={{ pointerEvents: 'all' }}
        className={`relative group w-full block overflow-hidden rounded-lg lg:rounded-[22px] border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-background cursor-pointer ${className}`}
        aria-label={`Play ${title}`}
      >
        {/* Thumbnail Image */}
        <Image
          src={thumbnailUrl}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover pointer-events-none"
          priority
        />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative">
            {/* Outer glow circle */}
            <div className="absolute inset-0 bg-white/3 rounded-full blur-xl scale-110" />

            {/* Play button circle - Glassmorphism effect */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/4 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
              <Play className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-black fill-black ml-1" />
            </div>
          </div>
        </div>
      </button>

      {/* YouTube Player Modal */}
      <YouTubePlayer
        videoId={videoId}
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
      />
    </>
  );
};
