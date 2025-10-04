"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
  companyImg: "/stealth.png",
  jobTitle: "Software Engineer",
  company: "Aspirify Enterprises Private Limited",
  jobType: "Full-Time",
  duration: "August 2025 - Present",
  stuffIDid: [
    "Tech Stack: C#, .NET, JavaScript, Reactjs, SQL.",
    "Worked on reverse engineering complex and unstructured data sources to extract, clean, and convert them into structured formats for internal systems.",
    "Built and optimized parsers to decode data from diverse sources such as social media platforms, payment applications, and machine-generated logs.",
    "Enhanced existing data pipelines for higher scalability, accuracy, and fault tolerance, ensuring reliable data flow across multiple services.",
    "Developed solutions to handle encrypted and nested data formats, improving automation and reducing manual intervention.",
    "Collaborated with mobile teams to ensure compatibility of data modules across Android and iOS devices.",
    "Contributed to architectural decisions and debugging critical issues impacting large-scale data ingestion and transformation workflows."
  ],
},
{
  companyImg: "/stealth.png",
  jobTitle: "Software Developer Intern",
  company: "Aspirify Enterprises Private Limited",
  jobType: "Internship",
  duration: "March 2025 - July 2025",
  stuffIDid: [
    "Tech Stack: C#, .NET, JavaScript, Reactjs, SQL.",
    "Collaborated with the React.js team to design and implement intuitive dashboards for visualizing parsed data.",
    "Developed and optimized custom parsers to extract structured information from various email formats. Built a Gmail parser that decoded raw email data (MIME format) for structured storage and retrieval.",
    "Worked closely with full stack engineers, backend developers, and frontend designers to ensure accurate data representation and smooth integration."
  ],
},
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
