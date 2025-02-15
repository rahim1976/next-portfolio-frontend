"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import FigmaIcon from "@/assets/icons/figma-icon.svg";
import NextIcon from "@/assets/icons/next-js-icon.svg";
import Vscode from "@/assets/icons/vscode-icon.svg";
import Python from "@/assets/icons/python.svg";
import Bootstrap from "@/assets/icons/bootstrap.svg";
import Tailwind from "@/assets/icons/tailwindcss.svg";
import TypescriptIcon from "@/assets/icons/typescript-icon.svg";
import Stack from "@/assets/icons/stack-overflow.svg";  
import Medium from "@/assets/icons/medium.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/Toolboxitems";
import { ToolboxItemstwo } from "@/components/ToolboxItemstwo";
import { motion } from "framer-motion";
import { useRef } from "react";
import Cursor from "@/assets/icons/cursor-icon.svg";
const toolboxItems = [
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "Tailwind CSS",
    iconType: Tailwind,
  },
  {
    title: "Bootstrap",
    iconType: Bootstrap,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "NextJs",
    iconType: NextIcon,
  },
  {
    title: "Python",
    iconType: Python,
  },
];
const ToolboxItems2 = [
  {
    title: "VsCode",
    iconType: Vscode,
  },
  {
    title: "Cursor",
    iconType: Cursor,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "Medium",
    iconType: Medium,
  },
  {
    title: "Stack Overflow",
    iconType: Stack,
  },
];
const hobbies = [
  {
    title: "Writing",
    emoji: "✍️",
    left: "3%",
    top: "-5%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "40%",
    top: "-1%",
  },
  {
    title: "Education",
    emoji: "🎓",
    left: "75%",
    top: "-1%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "18%",
    top: "30%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "60%",
    top: "30%",
  },
  {
    title: "E-Commerce",
    emoji: "💻",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "40%",
    top: "65%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "70%",
    top: "65%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28 scroll-mt-24" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, What I do, abd what inspires me. "
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8  md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technologies and tools i use to craft exceptional digital experiances."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=" "
                itemsWrapperClassName="animate-move-left [animation-duration:20s]"
              />
              <ToolboxItemstwo
                items={ToolboxItems2}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:10s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3  gap-8">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond The Code"
                description="Explore my interests and hobbies beyond the code."
                className="px-6 pt-6"
              />

              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative col-span-3 md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
