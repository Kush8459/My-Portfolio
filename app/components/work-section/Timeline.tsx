"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/GoPool.png",
    jobTitle: "Software Developer Intern",
    company: "GoPool",
    jobType: "Internship",
    duration: "June 2024 - Jan 2025",
    stuffIDid: [
      "Contributing to the development and enhancement of the company's landing page and frontend websites using ReactJS, JavaScript, and Tailwind CSS.",
      "Deploying and hosting web applications on AWS, ensuring scalability and reliability.",
      " Implementing efficient and reusable code to optimize performance and scalability, while actively participating in code reviews, debugging, and testing.",
      "Collaboration and Communication: Worked closely with the founder, product designer, and Guest Frontend/Backend Team, collaborating effectively with cross-functional teams, and translating technical concepts for non-technical stakeholders.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
