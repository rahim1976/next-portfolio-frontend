import Iman from "@/assets/images/iman.jpg";
import Luke from "@/assets/images/luke.jpg";
import Manjeet from "@/assets/images/manjeet.jpg";
import Wasif from "@/assets/images/wasif.jpeg";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
// import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Iman Gadzhi",
    position: "Agency Owner @ Digital Launchpad", 
    text: "Rahim revolutionized our digital presence by transforming our website into a powerful marketing tool. His attention to detail and deep understanding of our brand identity delivered exceptional results that elevated our online presence.",
    avatar: Iman,
  },
  {
    name: "Luke Belmar",
    position: "CEO @ Gem Hunters",
    text: "Collaborating with Rahim was incredible. His frontend expertise brought our vision to life in ways we never thought possible. The website he created has far surpassed our expectations and strengthened our digital presence.",
    avatar: Luke,
  },
  {
    name: "Manjeet Singh", 
    position: "CEO @ DSU Platinum",
    text: "Rahim's talent for creating seamless user experiences is remarkable. Since launching our new design, we've seen dramatic improvements in user engagement and conversion rates. His work has truly transformed our online presence.",
    avatar: Manjeet,
  },
  {
    name: "Wasif Ahmed",
    position: "Full Stack Developer @ Evolversoft",
    text: "Rahim is a frontend virtuoso. He expertly transformed our complex product into an intuitive and engaging interface that our users love. The positive impact on our digital presence has been immediate and substantial.",
    avatar: Wasif,
  },
  // {
  //   name: "Michael Brown",
  //   position: "Director of IT @ MegaCorp",
  //   text: "Rahim's contribution to our website has been remarkable. His technical expertise combined with excellent communication skills has significantly enhanced our digital presence. We wholeheartedly recommend his services.",
  //   avatar: memojiAvatar5,
  // },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left  [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment>
                {testimonials.map((testimonials) => (
                  <Card
                    key={testimonials.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex  items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonials.avatar}
                          alt={testimonials.name}
                          className="max-h-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonials.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonials.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonials.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
