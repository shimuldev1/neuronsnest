import WhatYouGetService from "@/components/Services/WhatYouGetService";
import { ServiceLineType, bannerInfoType } from "@/types/services";
import Head from "next/head";

const WebDevelopment = () => {
  const bannerInfo: bannerInfoType = {
    bannerTitle: "Crafting the Digital Future through Expert Web Development",
    bannerDescription:
      "At NeuronsNest, We provide professional web development services to create fast, secure, and responsive websites that meet your business requirements. Our experienced developers make websites that are easy to use, search engine optimized, and help turn visitors into customers. We implement the latest technologies to make scalable and innovative solutions for your business, whether you need a custom website, an eCommerce platform, or a web app. NeuronsNest makes sure that your website looks welloptimized by doing everything from UI/UX design to full-stack development. With our trusted web development skills, attract a wider audience and Enhance your brand presence across digital platforms",
    // bannerImg: "/images/services/WebsiteDevelopmentUpdate.png",
    bannerImg:
      "https://lottie.host/a0dac632-3152-4233-8844-6b307a56df2b/cKN7KWS5sE.lottie",
  };

  const getServiceTitle: string = "What You Get from Web Development Service";

  const lineService: ServiceLineType[] = [
    {
      title: "Fully Responsive",
      description:
        "Our websites are designed to be fully responsive, ensuring a seamless experience across all devices and screen sizes. Whether your visitors are accessing your site from a desktop, tablet, or smartphone, they'll enjoy a consistent and user-friendly browsing experience.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "We implement best practices for on-page SEO to improve your website's visibility in search engine results. From optimized meta tags and headings to keyword-rich content and SEO-friendly URLs, we ensure that your website is easily discoverable by your target audience.",
    },
    {
      title: "Scalability",
      description:
        " Our websites are built with scalability in mind, allowing your business to grow without limitations. Whether you're adding new products, expanding your services, or reaching new markets, our websites can easily accommodate your evolving needs.",
    },
    {
      title: "Security",
      description:
        " We prioritize the security of your website, implementing industry-leading measures to safeguard your data and protect against cyber threats. From robust encryption protocols to secure login systems, we ensure that your website is fortified against potential vulnerabilities, providing a safe browsing experience for your users.",
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
        <title>Web Development Services - NeuronsNest</title>
        <meta
          name="description"
          content="Crafting the digital future through expert web development with NeuronsNest. Our websites are fully responsive, SEO-optimized, scalable, secure, and optimized for speed. Join us at the forefront of web development."
        />
        <meta
          name="keywords"
          content="Web development, Responsive design, SEO optimization, Scalability, Security, Speed optimization, Ongoing support, NeuronsNest, Next.js web development, professional website design, SEO optimized websites, responsive web apps, eCommerce development, UI/UX design, full-stack development, scalable web solutions"
        />
        <meta name="author" content="NeuronsNest" />
        <meta
          property="og:title"
          content="Expert Web Development Services - NeuronsNest"
        />
        <meta
          property="og:description"
          content="Crafting the digital future through expert web development with NeuronsNest. Our websites are fully responsive, SEO-optimized, scalable, secure, and optimized for speed. Join us at the forefront of web development."
        />
        <meta
          property="og:image"
          content="/images/banner_web_development.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/web-development-services"
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

export default WebDevelopment;
