"use client";
import Head from "next/head";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>NeuronsNest - A Complete Tech Solution</title>
        <meta
          name="description"
          content="Enhance your business with NeuronsNest. We offer comprehensive tech solutions to turn your ideas into reality, providing services from design to development and beyond."
        />
        <meta
          name="keywords"
          content="NeuronsNest, tech solutions, business enhancement, software development, technology services"
        />
      </Head>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* flex-col for mobile, flex-row for large screens */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 NeuronsNest - A Complete tech solution.
              </h4>
              <h1 className="mb-5 pr-0 lg:pr-16 bannerText font-bold text-black leading-normal dark:text-white">
                Enhance Your Business With
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  NeuronsNest
                </span>
              </h1>
              <p className="text-justify text-black dark:text-slate-300">
                NeuronsNest is a leading provider in the IT solutions industry,
                delivering expert services across a wide range of domains. Our
                solutions include Web development, Mobile app development,
                Custom software solutions, AI automation, AI powered marketing,
                and workflow automation, all designed to meet your unique
                business needs and lead digital growth. We specialize in helping
                businesses automate workflows, boost customer loyalty, and lead
                continuous digital growth. Through our customized, innovative
                technologies, companies across varied industries can boost
                efficiency and drive higher profitability. We can make it easy
                to get a foot on the digital ladder and keep high progress level
                with an ever-changing world of tech trends.
              </p>
            </div>

            {/* Right Side: Video (on mobile it will show under text) */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <div className="relative aspect-[700/444] w-full">
                <video
                  className="w-full h-full rounded-xl"
                  src="/images/hero/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
