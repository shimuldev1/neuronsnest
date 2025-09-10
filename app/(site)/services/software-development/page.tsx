import WhatYouGetService from "@/components/Services/WhatYouGetService";
import { ServiceLineType, bannerInfoType } from "@/types/services";
import Head from "next/head";

const SoftwareDevelopment = () => {
  const bannerInfo: bannerInfoType = {
    bannerTitle:
      "Elevate Your Business with NeuronsNest's Custom Software Solutions",
    bannerDescription:
      "NeuronsNest is a top IT solutions company that provides highquality software development services that are tailored to your business demands. We make custom software, web and mobile apps, and automation solutions that apply AI. Using the latest technologies, our skilled developers create digital products that are fast, scalable, and safe. NeuronsNest gives you results that help your business grow, whether you need a simple web app, a powerful enterprise system, or a smart automation tool. We help businesses boost productivity, improve their online presence, and achieve long-term success in the competitive tech landscape by focusing on performance, user experience, and SEO optimization.",
    bannerImg:
      "https://lottie.host/0a10f08f-f007-407e-a957-fd331ff36e88/RzJ3fgNyH3.lottie",
  };

  const getServiceTitle: string =
    "What You Get from Software Development Service";

  const lineService: ServiceLineType[] = [
    {
      title: "Custom Software Solutions",
      description:
        "NeuronsNest specializes in crafting custom software solutions tailored to your specific requirements. Our experienced team designs and develops software applications that align with your business goals and streamline your processes, giving you a competitive edge in the market.",
    },
    {
      title: "Agile Development Methodology ",
      description:
        "Our team follows agile principles to deliver high-quality software efficiently. By breaking down projects into manageable tasks and iterating through development cycles, we ensure flexibility, adaptability, and rapid delivery of features that meet evolving user needs.",
    },
    {
      title: "Scalability & Performance Optimization ",
      description:
        "Our software solutions are designed for scalability, allowing them to handle increased user loads and growing datasets without sacrificing performance. Through efficient database design, caching strategies, and optimization techniques, we ensure smooth, responsive user experiences.",
    },
    {
      title: "Testing & Security Audits",
      description:
        "NeuronsNest conducts comprehensive testing and security audits to ensure the reliability and integrity of your software. Our testing process includes functional testing, performance testing, and security testing to identify and address any vulnerabilities or issues. We also provide security audits to assess your software's security posture and recommend enhancements to protect against potential threats.",
    },
    {
      title: "Optimized",
      description:
        "Speed matters in the digital world, which is why we optimize every aspect of your website for lightning-fast performance. From efficient coding practices to image optimization and caching techniques, we ensure that your website loads quickly and smoothly across all devices. With improved loading times, you can enhance user experience, reduce bounce rates, and boost your search engine rankings.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "Our commitment to your success doesn't end with the launch of your website. We offer ongoing support and maintenance services to keep your website running smoothly and up-to-date. Whether you need technical assistance, content updates, or security patches, we're here to help you every step of the way.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Custom Software Solutions - NeuronsNest</title>
        <meta
          name="description"
          content="Elevate your business with NeuronsNest's custom software solutions. Our team crafts custom apps tailored to your needs, delivering engaging experiences and driving user loyalty. Services include agile development, scalability, testing, security audits, and ongoing support."
        />
        <meta
          name="keywords"
          content="Custom software solutions, Software development services, Agile development, Scalability, Performance optimization, Testing, Security audits, Ongoing support, NeuronsNest, custom software development, AI automation, web development, mobile app development, IT solutions company, scalable applications, secure software, digital transformation"
        />
        <meta name="author" content="NeuronsNest" />
        <meta
          property="og:title"
          content="Elevate Your Business with NeuronsNest's Custom Software Solutions"
        />
        <meta
          property="og:description"
          content="Today's digital landscape demands custom software solutions that drive user engagement and business success. NeuronsNest crafts tailored applications to meet your needs, ensuring exceptional experiences that exceed user expectations."
        />
        <meta
          property="og:image"
          content="/images/banner_software_development.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/custom-software-solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <WhatYouGetService
        bannerInfo={bannerInfo}
        getServiceTitle={getServiceTitle}
        lineService={lineService}
      />
    </div>
  );
};

export default SoftwareDevelopment;
