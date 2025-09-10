"use client";
import { bannerInfoType } from "@/types/services";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";

type ServiceLineType = {
  title: string;
  description: string;
};
type Props = {
  bannerInfo: bannerInfoType;
  getServiceTitle: string;
  lineService: ServiceLineType[];
};

const WhatYouGetService = ({
  bannerInfo,
  getServiceTitle,
  lineService,
}: Props) => {
  const highlightKeywords = (text: string, keywords: string[]) => {
    if (!text) return null;

    const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

    return parts.map((part, index) =>
      keywords.some((kw) => part.toLowerCase() === kw.toLowerCase()) ? (
        <span
          key={index}
          className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <div className="mx-auto max-w-c-1390 md:px-8 2xl:px-0 text-gray-600 body-font mt-14">
        <div className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Text Section */}
            <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
              {/* <h4 className="mb-4.5 text-4xl font-bold text-black leading-[1.5] dark:text-white">
                {bannerInfo?.bannerTitle}
              </h4> */}
              <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
                <h4 className="mb-4.5 text-4xl font-bold text-black leading-[1.5] dark:text-white">
                  {highlightKeywords(bannerInfo?.bannerTitle, [
                    "Mobile Apps",
                    "Web Development",
                    "Ai Automation",
                    "workflow automation",
                    "AI-Driven Marketing and CRM",
                  ])}
                </h4>
              </div>
              <p className="mb-8 leading-relaxed text-justify dark:text-slate-400">
                {bannerInfo?.bannerDescription}
              </p>
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/contact`}
                className="inline-flex text-white font-semibold bg-slate-950 border-0 py-2 px-6 focus:outline-none rounded text-lg"
              >
                Contact Us
              </Link>
            </div>

            {/* Animation/Image Section */}
            {/* <div className="w-full flex justify-center"> */}
              
                <DotLottieReact
                  src={bannerInfo?.bannerImg}
                  loop
                  autoplay
                  style={{ width: "100%", height: "500px" }} // 👈 force size here
                />
             
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="bg:[#FFF] mt-[52px] mb-[59px]">
        <h2 className="text-black mb-4.5 text-4xl font-bold text-center leading-[1.5] dark:text-white">
          {highlightKeywords(getServiceTitle, [
            "Mobile Apps",
            "Web Development",
            "Ai services",
            "workflow automation",
            "AI-Driven Marketing and CRM",
          ])}
        </h2>
        <div className=" container mx-auto sm:px-[50px] lg:[px-105px]">
          <div className="flex flex-col md:grid grid-cols-9 mx-auto  text-blue-50">
            {lineService?.map((service, index) => (
              <div key={index} className="md:contents text-[#1E1E1E]">
                {/* Left Side */}
                <div
                  className={` p-7 rounded-xl my-4 shadow-lg ${
                    index % 2 === 0
                      ? "col-start-1 col-end-5 ml-auto"
                      : "col-start-6 col-end-10 mr-auto"
                  }`}
                >
                  <h4 className="font-bold text-2xl text-start mb-4 text-black dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-justify text-black dark:text-slate-300">{service.description}</p>
                </div>

                {/* Center Line */}
                <div className="col-start-5 col-end-6 relative flex justify-center ">
                  <div className="w-1 bg-[#012B6D] h-full"></div>
                  <div className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[#012B6D] text-white text-sm flex items-center justify-center shadow">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGetService;
