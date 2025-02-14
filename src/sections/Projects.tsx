import foodTuck from "@/assets/images/food-tuck.png";
import gamerParadise from "@/assets/images/gamer-paradise.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import pixelink from "@/assets/images/pixel-link.png";
const portfolioProjects = [
  {
    company: "Gamers Paradise Co",
    year: "2024",
    title: "Computer Blogs Landing Page",
    results: [
      { title: "Point To Point Content Sharing." },
      { title: "Minimalistic User Interface." },
      { title: "Latest Gaming Tech Blogs." },
    ],
    link: "https://next-tailwind-blog-seven.vercel.app/",
    image: gamerParadise,
  },
  {
    company: "Pixelink Corp",
    year: "2024",
    title: "Dynamic Blog Landing Page",
    results: [
      { title: "Smooth & Animated User Interface." },
      { title: "Enhanced User Experience." },
      { title: "Latest Tech Blogs." },
    ],
    link: "https://pixellink.vercel.app/",
    image: pixelink,
  },
  { 
    company: "Food Tuck Co",
    year: "2025",
    title: "Food Marketplace Landing Page",
    results: [
      { title: "Secured Data Integration." },
      { title: "Functional User Experiance." },
      { title: "Pixel Perfect UI." },
    ],
    link: "https://hackathon-day-7-food-tuck-6vbh.vercel.app/",
    image: foodTuck,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24 scroll-mt-24" id="projects" >
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how i transformed concepts into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col  gap-20">
          {portfolioProjects.map((project ,projectIndex) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{
                top: `calc(64px + ${projectIndex * 90}px`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col  gap-4 mt-4 md:mt-5 ">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base  text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <ArrowUpRightIcon className="size-4" />
                      <span>Visit Live Site</span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
