import React from 'react';
import hero1 from "./hero1.mp4";
import { useRef, useEffect } from "react";

const VideoBackground = () => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const video = videoRef.current;
  
      // Логирование возможных ошибок
      video.addEventListener("error", () => {
        console.error("Ошибка воспроизведения видео");
      });
  
      // Попробовать программно запустить видео, если autoplay не срабатывает
      if (video) {
        video.play().catch((error) => {
          console.error("Не удалось запустить видео:", error);
        });
      }
    }, []);
  
    return (
      <video
        ref={videoRef}
        src="./hero1.mp4"
        preload="metadata"
        // muted
        // loop
        // playsInline
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    );
  };
  



const Hero = () => {
    return (


        <div class="hero flex relative overflow-hidden text-white mb-20 md:mb-36 lg:mb-52">
            <div class="absolute inset-0 bg-black z-10 filter grayscale">
                <video src={hero1} preload="metadata" muted loop playsinline autoplay
                    class="absolute top-0 left-0 w-full h-full object-cover"></video>
            </div>
            <div class="relative max-w-screen-xl flex flex-col justify-between pt-20 md:pt-24 pb-8 md:pb-12 z-20">
                <div>
                    <h1 class="text-4xl font-bold w-full max-w-[110rem]">Get set for an electric future</h1>
                    <div class="hidden md:flex gap-x-6 mt-10">
                        <a href="solutions/index.htm"
                            class="inline-flex items-center px-10 h-20 relative w-full max-w-[30rem] md:max-w-[35rem] rounded-full bg-white text-black">
                            <span class="font-medium">Our solutions</span>
                            <div aria-hidden="true"
                                class="absolute inset-[-1px] rounded-full flex items-center px-10 z-20 bg-yellow text-black">
                                <div class="flex justify-between items-center">
                                    Our solutions
                                    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 5.625L7.625 5.625L4.125 9.125L5 10L10 5L5 0L4.125 0.875L7.625 4.375L0 4.375L0 5.625Z"
                                            class="fill-current"></path>
                                    </svg>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-start md:items-end md:justify-between">
                    <h2 class="text-xl max-w-[45rem]">
                        Experts in smart<br />
                            EV charging solutions
                    </h2>
                    <div class="relative inline-flex items-center font-medium mt-10 md:mt-0">
                        Explore
                        <div class="relative overflow-hidden ml-2">
                            <div class="relative">
                                ↓
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Hero;