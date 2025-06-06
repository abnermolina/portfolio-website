"use client";

import {
  SiPython,
  SiFastify,
  SiAmazonaws,
  SiPrisma,
  SiNumpy,
  SiCplusplus,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

//about data
const about = {
  title: "About me",
  description:
    "I am currently an MIT student about to start my second year of college. I am eager to continue learning alongside others in the finance & tech fields.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abner Molina",
    },
    {
      fieldName: "Languages",
      fieldValue: "English & Spanish",
    },
    {
      fieldName: "Location",
      fieldValue: "Boston, MA",
    },
    {
      fieldName: "Interests",
      fieldValue:
        "Quantitative Trading, Data Analysis and Computer Simulations",
    },
    {
      fieldName: "Education",
      fieldValue: "Massachusetts Institute of Technology",
    },
    {
      fieldName: "Email",
      fieldValue: "asamuel0416@gmail.com",
    },
  ],
};

//experience data
const experience = {
  icons: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have participated in and am currently engaged in various projects and work experiences.",
  items: [
    {
      company: "Talyko: Financial Software",
      position: "Co-founder & Back-end Developer",
      duration: "May 2024 - Present",
    },
    {
      company: "CND an AB-InBev Company",
      position: "Production Engineering Intern",
      duration: "June 2023 - August 2023",
    },
    {
      company: "Orange Coast College Honors Program",
      position: "CS Undergraduate Researcher",
      duration: "Sep 2022 - April 2023",
    },
    {
      company: "Cerveceria Hondureña an AB-InBev Company",
      position: "Data Analysis Intern",
      duration: "July 2024 - August 2024",
    },
  ],
};

//education
const education = {
  icons: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I am studying Computer Science & Engineering with a focus in Mathematics at MIT.",
  items: [
    {
      institution: "Massachusetts Institute of Technology",
      degree: "Bachelor's in CS & Engineering",
      duration: "June 2025 - Present",
    },
    {
      institution: "Orange Coast College Honors Program",
      degree: "Associates in Math, Physics, & CS",
      duration: "August 2022 - Present",
    },
    {
      institution: "Orange Coast College",
      degree: "President's List at Orange Coast College",
      duration: "August 2022 - Present",
    },
    {
      institution: "Self-study",
      degree: "Various Modern Software Technologies",
      duration: "August 2022 - Present",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Highlighting expertise in software development, project management, and creative problem-solving to excel in ever-evolving software landscapes.",

  skillList: [
    {
      icon: <SiPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiAmazonaws />,
      name: "Amazon Web Services S3",
    },
    {
      icon: <SiPrisma />,
      name: "Prisma ORM",
    },
    {
      icon: <SiNumpy />,
      name: "Numpy",
    },
    {
      icon: <SiFastify />,
      name: "Fastify",
    },
    {
      icon: <SiZod />,
      name: "Zod",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/*content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mas-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mas-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skills, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skills.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
