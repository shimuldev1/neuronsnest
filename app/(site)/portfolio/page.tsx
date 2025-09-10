"use client";

import Loading from "@/components/Loading/page";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PortfolioItem {
  id: number;
  bannerTitle: string;
  bannerDescription: string;
  bannerImg: string;
}

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data: PortfolioItem[]) => setPortfolioData(data))
      .catch((err) => {
        console.error("Failed to load portfolio data:", err);
      });
  }, []);

  if (portfolioData.length === 0) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-32 mb-14 space-y-12 container mx-auto max-w-6xl">
      {portfolioData.map((project) => (
        <div
          key={project.id}
          className="relative flex flex-col md:flex-row w-full shadow-sm border border-slate-200 dark:border-slate-400 rounded-lg"
        >
          {/* First image from bannerImg array */}
          <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
            <img
              src={project.bannerImg}
              alt={`project-image-${project.id}`}
              className="h-full w-full rounded-md md:rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="p-6 md:w-3/5 mt-10">
            <div className="mb-4 rounded-full bg-black py-0.5 px-2.5 text-xs text-white dark:text-white shadow-sm w-fit">
              PROJECT
            </div>
            <h4 className="mb-2 text-black dark:text-white text-xl font-semibold">
              {project.bannerTitle}
            </h4>
            <p className="mb-8 text-black dark:text-slate-300 leading-relaxed font-light">
              {project.bannerDescription
                ? project.bannerDescription.length > 30
                  ? project.bannerDescription.slice(0, 400) + "..."
                  : project.bannerDescription
                : "No description available."}
            </p>
            <div>
              <Link
                href={`/portfolio/${project.id}`}
                className="text-black dark:text-slate-300 font-semibold text-sm hover:underline flex items-center"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
