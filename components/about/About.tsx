"use client";

import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  Phone,
  User2,
} from "lucide-react";
import Image from "next/image";
import TitleText from "../reuseables/TitleText";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ohiduzzaman Siam",
  },
  {
    icon: <Phone size={20} />,
    text: "+880 177-0371-XXXX",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ohiduzzamansiam1@gmail.com",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Currently On 9th Grade",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 February, 2008",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "166/8 Utso, Gollamari, Khulna",
  },
];

const varients = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

function About() {
  return (
    <>
      <section>
        <TitleText
          text="About Me 🧑"
          className="flex flex-col items-center justify-center mb-16 lg:mb-20"
        />
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row lg:space-y-0 justify-center items-center">
            {/* images */}
            <div className="flex flex-1 transition-all duration-500 mx-auto">
              <div className="relative w-[70%] md:w-[60%] lg:w-[70%] mx-auto">
                <Image
                  src="/siam.png"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full mx-auto -z-10"
                  priority
                />
                <div className="h-60 lg:h-72  bg-gradient-to-t from-black absolute bottom-0 left-0 xl:bottom-0 w-full rounded-b-2xl"></div>
              </div>
            </div>
            <div className="flex-1 z-10 mt-5 dark:mt-0 ">
              <div>
                <div className="text-center xl:text-left">
                  <h3 className="mb-4 text-3xl font-bold">
                    Unbeatable Service Quality forever.
                  </h3>
                  <p className="max-w-xl xl:mx-0 mx-auto text-sm md:text-base">
                    I&apos;m a 16-year-old full-stack developer with over three
                    years of experience specializing in crafting intuitive
                    websites with cutting-edge technology. I&apos;ve sharped my
                    skills by working on various projects on platforms like
                    Fiverr for more than a year, earning over $200.
                  </p>
                  {/* icons */}
                  <div className="grid xl:grid-cols-2 gap-4 my-8">
                    {infoData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                      >
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    ))}
                  </div>
                  {/* languages */}
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <p className="text-lg font-medium">
                      English, Bengali, Hindi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
