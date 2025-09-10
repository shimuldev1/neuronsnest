"use client";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import React from 'react';
import Image from "next/image";


// A single statistic card component for reusability
const StatCard = ({ end, suffix, label, delay }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center w-60 lg:w-64 md:w-72 h-36 mx-auto"
  >
    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2 mt-4">
      <CountUp start={0} end={end} duration={4} suffix={suffix} enableScrollSpy />
    </h3>
    <p className="text-base font-medium text-gray-500">{label}</p>
  </motion.div>
);


const FunFact = () => {
  const stats = [
    { end: 20, suffix: "+", label: "Team Members", delay: 0.2 },
    { end: 125, suffix: "+", label: "Active Clients", delay: 0.3 },
    { end: 250, suffix: "+", label: "Projects Delivered", delay: 0.4 },
    { end: 10, suffix: "+", label: "Orders in Queue", delay: 0.5 },
    // { end: 95, suffix: "%", label: "Issue Resolved", delay: 0.6 },
  ];


  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 my-10 mb-16 2xl:px-0">
        {/* This container uses the background and shape images from your original code */}
        <div className="relative z-1 mx-auto max-w-c-1390 lg:h-[300px] h-full rounded-lg bg-gradient-to-t from-[#3388ffea] to-[#5046E5] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-12.5 opacity-90">
          {/* Decorative shape images from original design */}
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-rocket.png"
            // src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
            alt="Man"
            className="absolute -left-15 -top-40 -z-1 lg:left-0 hidden md:flex"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <Image
            width={132}
            height={132}
            src="/images/shape/shape-05.png"
            alt="Doodle"
            className="absolute bottom-0 right-0 -z-1"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />


          {/* Content container with the new layout */}
          <div className="relative z-10 px-4 md:px-8">
            {/* Header Text Animation */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              {/* Text colors are adjusted for the light background */}
              <h2 className="text-3xl font-bold text-white dark:text-white sm:text-4xl lg:text-5xl mb-4">
                Why Working With Us
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-white dark:text-gray-300">
                Our motivation is to create a positive influence on the world through our efforts. We are dedicated to leveraging our skills and abilities to effect change.
              </p>
            </motion.div>


            {/* Stats Grid using the new StatCard component */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-x-0 md:gap-y-10 lg:gap-8">
              {stats.map((stat, index) => (
                <StatCard
                  key={index}
                  end={stat.end}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={stat.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};


export default FunFact;

