"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "computational Fluid Dynamics Research",
    title: "project 1",
    description:
      "Worked alongside Dr. Angelo Esposito and german graduate student Felix Kohler to reverse engineer a fluid dynamics simulation using the Lattice-Boltzmann method in Python. Improved the velocity of the simulation by 13,100% by changing from Numpy to the Google JAX library. Finally, we developed a qualitative experimental apparatus to test the accuracy simulation. Presented at the annual Giles T. Brown research conference.",
    stack: [
      { name: "Python" },
      { name: "Google JAX" },
      { name: "Matplotlib" },
      { name: "Cmasher" },
    ],
    image: "/assets/work/LBM_FLUID_SIMULATION.jpg",
    github: "https://github.com/abnermolina/LBM_Fluid-Simulation",
  },
  {
    num: "02",
    category: "Talyko Financial Software",
    title: "project 2",
    description:
      "Co-founded Talyko Financial Software to provide low-cost financial solutions to startups. I developed the API and am currently working alongside co-founder to finish the front-end and deploy the project. We have already secured 2 customers in the general contracting business and we are looking to continue expanding. If interested in Talyko's services feel free to reach out.",
    stack: [
      { name: "Typescript" },
      { name: "Fastify" },
      { name: "Prisma" },
      { name: "Zod" },
      { name: "AWS S3" },
    ],
    image: "/assets/work/TALYKO_LOGO.png",
    live: "",
    github: "https://github.com/abnermolina/Invoicing-App",
  },
  {
    num: "03",
    category: "CND Production Engineering Intern",
    title: "project 3",
    description:
      "Provided regular maintenance to Programmable Logic Controllers that control the production lines. Helped the production planning team to automate the receival of stock keeping units to streamline the planning process. Received leadership training directly from the plant director and learned about the processes of a production environment as well as numerical indicators to keep teams accountable and focused on the company's goal: be the happiest, most sustainable plant in the world.",
    stack: [{ name: "Java" }, { name: "Python" }, { name: "Simotion" }],
    image: "/assets/work/CND_WORK.jpg",
    github: "Not Applicable",
  },
  {
    num: "04",
    category: "cerveceria Hondureña Data Analyst",
    title: "project 4",
    description:
      "Specialized in extracting key data from SIEMENS PLCs to design effective preventive maintenance plans for industrial machinery. Developed an internal notification system using Telegram's API to provide real-time alerts for component malfunctions, enhancing response efficiency. Contributed to the creation of standard operating procedures based on alert severity, ensuring appropriate and timely actions. Trained in advanced problem-solving practices for industrial maintenance, focused on delivering lasting solutions.",
    stack: [
      { name: "Python" },
      { name: "Snap-7" },
      { name: "Telegram's API" },
      { name: "Matplotlib" },
      { name: "csv" },
    ],
    image: "/assets/work/foto_cerveceria.jpg",
    github: "Private",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-white">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
