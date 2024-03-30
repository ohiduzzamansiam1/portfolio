"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import TitleText from "../reuseables/TitleText";
import { Button } from "../ui/moving-border";

export default function Hero() {
  const currentTime = new Date().getHours();
  const { setTheme } = useTheme();

  return (
    <div className="flex mt-8 lg:mt-0 items-center flex-col-reverse lg:flex-row gap-24 lg:gap-0 justify-between min-h-[65vh] lg:min-h-[75vh]">
      {/* Left Side */}
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-6xl lg:text-[4.8rem] leading-[1] font-extrabold">
          Nice to meet you!
          <span className="hidden xl:inline-block">💝</span>
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            I&apos;m Siam.
          </span>
        </h1>
        <p className="w-96 sm:text-lg tetx-gray-400 dark:text-gray-300">
          Based in Bangladesh, I&apos;m a Full-Stack developer, passionate about
          building modern web application that scales.
        </p>
        <Link
          href="mailto:ohiduzzamansiam1@gmail.com"
          className="inline-block group"
        >
          <TitleText text="Contact Me 📩" />
        </Link>
      </div>

      {/* Right Side Glowing Boxes */}
      <div className="relative">
        <div className="size-72 space-y-3 -rotate-[30deg] relative flex flex-col justify-center items-center">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 lg:size-44 rounded-2xl bg-green-500"></div>
            <div className="size-32 lg:size-44 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 lg:size-44 rounded-2xl bg-indigo-500"></div>
            <div className="size-32 lg:size-44 rounded-full bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute -left-4 bottom-[4.9rem] sm:-left-8">
          <Button className="p-3 px-5 font-semibold" borderRadius=".5rem">
            <span className="rotate-[-30deg]">📢</span>
            Available for Work
          </Button>
        </div>
      </div>
    </div>
  );
}
