import About from "@/components/about/About";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Testimonials from "@/components/testimonials/Testimonials";

export default function HomePage() {
  return (
    <div className="min-h-dvh dark:bg-black bg-white overflow-x-hidden">
      <div className="dark:bg-black bg-white bg-grid-black/[.03] dark:bg-grid-white/[0.05] relative">
        <div className="max-w-[85rem] mx-auto px-5 lg:px-14">
          <Navbar />
          <Hero />
        </div>

        <div className="h-10 xl:h-40 bg-gradient-to-t dark:from-black from-white absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>

      <div className="max-w-[85rem] mx-auto px-5 lg:px-14 mt-28 lg:mt-44">
        <About />
      </div>

      <div className="max-w-[85rem] mx-auto px-5 lg:px-14 mt-28 lg:mt-44">
        <Skills />
      </div>

      <div className="max-w-[85rem] mx-auto px-5 lg:px-14 mt-20">
        <Projects />
      </div>

      <div className="mx-auto lg:px-14 mt-20 lg:mt-28">
        <Testimonials />
      </div>

      <div className="max-w-[85rem] mx-auto px-5 lg:px-14 mt-20 mb-8">
        <Navbar />
        <p className="text-center font-medium text-gray-500 dark:text-gray-300">
          <span className="text-xs">{new Date().toDateString()}</span>
          <br />
          Crafted by{" "}
          <span className="text-green-500 hover:text-indigo-500 font-semibold transition duration-500 select-none cursor-pointer">
            &copy;Siam
          </span>
        </p>
      </div>
    </div>
  );
}
