import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "GoPool",
      // gitLink: "https://github.com/adex-hub/url-shortening-api-landing",
      liveLink: "https://gopool.app/",
      about:
        "India's first and foremost platform dedicated to building community and enhancing airport travel experiences. GoPool connect travelers arriving at and departing from major airports in Bangalore, Hyderabad, Pune, Goa, and Nagpur, enabling them to share cabs and split costs. ",
      stack: ["React.js", "JavaScript", "tailwindcss"],
      img: "/gopoolProject.png",
    },
    {
      title: "Movix",
      gitLink: "https://github.com/kush8459/Movix",
      liveLink: "https://movix-sable.vercel.app/",
      about:
        "Designed and built a dynamic movie and TV show rating platform where users can explore a vast collection of titles, share their opinions through ratings and reviews, and discover trending content. Implemented an intuitive user interface for seamless navigation, ensuring an engaging and interactive experience.",
      stack: ["React.js", "javascript", "tailwindcss", "Redux"],
      img: "/movixProject.png",
    },
    {
      title: "CryptoVerse",
      gitLink: "https://github.com/Kush8459/Cryptoverse",
      liveLink: "https://cryptoverse-kappa-two.vercel.app/",
      about:
        "Built a cryptocurrency tracking app that enables users to explore real-time token prices, interactive charts, and the latest news in the crypto market. Integrated API support for live data updates, ensuring accurate market insights. Designed a user-friendly interface for seamless navigation and enhanced user experience.",
      stack: ["React.js", "javascript", "tailwindcss", "Redux"],
      img: "/cryptoProject.png",
    },
    {
      title: "Hotelo",
      gitLink: "https://github.com/Kush8459/Gocomet-assignment-frontend-hotel",
      liveLink: "https://gocomet-assignment-frontend-hotel.vercel.app/",
      about:
        "Explore and book hotels effortlessly with our seamless platform. Browse a wide range of accommodations, from budget stays to luxury resorts, with real reviews, high-quality images, and detailed amenities. Select your check-in date, choose the number of guests, and confirm your booking in just a few clicks.",
      stack: ["React.js", "javascript", "tailwindcss"],
      img: "/hoteloProject.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
