"use client";

import {
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiVuedotjs,
} from "react-icons/si";
import TitleText from "../reuseables/TitleText";
import { HoverEffect } from "../ui/card-hover-effect";

const skills = [
  {
    text: "JavaScript",
    icon: SiJavascript,
  },
  {
    text: "Node.js",
    icon: SiNodedotjs,
  },
  {
    text: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    text: "React.js",
    icon: SiReact,
  },
  {
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "Vue.js",
    icon: SiVuedotjs,
  },
  {
    text: "Nuxt.js",
    icon: SiNuxtdotjs,
  },
  {
    text: "Prisma",
    icon: SiPrisma,
  },
  {
    text: "MongoDB",
    icon: SiMongodb,
  },
  {
    text: "PostgreSQL",
    icon: SiPostgresql,
  },
  {
    text: "Supabase",
    icon: SiSupabase,
  },
  {
    text: "Firebase",
    icon: SiFirebase,
  },
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <TitleText
        text="Skills 💪"
        className="flex flex-col items-center justify-center -rotate-6 mb-5"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
