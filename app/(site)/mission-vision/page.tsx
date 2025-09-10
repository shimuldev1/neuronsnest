"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Mission = () => {
  return (
    <div className="my-30">
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-16  dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Mission */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 dark:text-white">
                🚀 Our Mission
              </h3>
              <p className="text-gray-700 text-xl leading-8 dark:text-slate-400 text-justify">
                At <strong>NeuronsNest</strong>, our mission is to accelerate
                digital evolution by delivering intelligent, custom-built
                technology solutions. We are dedicated to empowering startups,
                SMEs, and enterprises through automation, AI-driven innovation,
                and seamless software experiences. By focusing on real business
                problems, we help our clients unlock productivity, improve
                customer engagement, and lead confidently in a tech-driven
                world.
              </p>
            </div>

            <DotLottieReact
              src="https://lottie.host/9a37f61f-d309-408c-8dc0-3a3a74960936/KgZaTbPIJi.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }} // 👈 force size here
            />
            {/* </div> */}
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <DotLottieReact
              src="https://lottie.host/7904f741-7eb2-41c1-af18-f97593113609/NsXZVLPsrl.lottie"
              loop
              autoplay
              style={{ width: "100%", height: "100%" }} // 👈 force size here
            />

            {/* Text */}
            <div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-6 dark:text-white">
                🌐 Our Vision
              </h3>
              <p className="text-gray-700 text-xl leading-8 dark:text-slate-400 text-justify">
                Our vision is to be the catalyst of digital transformation for
                businesses across the globe. We envision a future where
                technology seamlessly enhances every part of a business — from
                internal workflows to customer experience — enabling companies
                to grow faster, operate smarter, and innovate endlessly. At
                NeuronsNest, we strive to make advanced technologies accessible,
                impactful, and sustainable for every client we serve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
