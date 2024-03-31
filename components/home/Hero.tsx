"use client";

import { useTexts } from "@/lib/store/useTexts";
import Link from "next/link";
import TitleText from "../reuseables/TitleText";
import { Button } from "../ui/moving-border";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Hero() {
  const { title, subtitle } = useTexts();
  return (
    <div className="flex mt-8 lg:mt-0 items-center flex-col-reverse lg:flex-row gap-24 lg:gap-0 justify-between min-h-[65vh] lg:min-h-[75vh]">
      {/* Left Side */}
      <div className="space-y-10 text-center lg:text-left">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-0 hidden lg:dark:inline-flex lg:inline-flex"
          fill="white"
        />
        <h1 className="text-4xl sm:text-6xl lg:text-[4.8rem] font-extrabold tracking-tight">
          {title}
          <span className="animate-pulse">💝</span>
          <br />
          <span className="underline underline-offset-8 decoration-green-500 hover:text-green-500 transition-all duration-500 select-none cursor-pointer">
            I&apos;m <span className="text-green-500">Siam.</span>
          </span>
        </h1>
        <TextGenerateEffect
          className="sm:text-lg text-gray-400 dark:text-gray-300 w-96"
          words={subtitle}
        />
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
            <div className="size-32 px-1 lg:size-44 rounded-2xl bg-green-500 flex items-center justify-center">
              <h1 className="text-xl text-center font-bold">
                55+ <br /> Happy Clients
              </h1>
            </div>
            <div className="size-32 lg:size-44 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 lg:size-44 rounded-2xl bg-indigo-500"></div>
            <div className="size-32 lg:size-44 rounded-full bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute -left-4 bottom-[4rem] md:-left-12  sm:-left-28 rotate-[-30deg]">
          <Link href="https://www.fiverr.com/ohi_siam" target="_blank">
            <Button className="p-3 px-5 font-semibold" borderRadius=".5rem">
              Available for Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
