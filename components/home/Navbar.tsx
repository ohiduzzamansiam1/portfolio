import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa6";
import ThemeToggleButton from "../extras/ThemeToggleButton";

const socials = [
  {
    link: "https://github.com/ohiduzzamansiam1",
    label: "Github",
    icon: FaGithub,
  },
  {
    link: "https://github.com/ohiduzzamansiam1",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/ohiduzzamansiam1",
    label: "Facebook",
    icon: FaFacebookF,
  },
];

export default function Navbar() {
  return (
    <nav className="py-10 flex items-center justify-between">
      <h1 className="text-2xl font-extrabold underline select-none cursor-pointer underline-offset-[6px] decoration-green-500 -rotate-2 tracking-tight s">
        Siam.👨🏻‍💻
      </h1>
      <div className="flex items-center gap-x-7">
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          {socials.map((social, idx) => (
            <Link
              href={social.link}
              target="_blank"
              key={idx}
              aria-label={social.label}
            >
              <social.icon
                size={24}
                className={"transition-all duration-300 hover:scale-125"}
              />
            </Link>
          ))}
        </div>

        <ThemeToggleButton />
      </div>
    </nav>
  );
}
