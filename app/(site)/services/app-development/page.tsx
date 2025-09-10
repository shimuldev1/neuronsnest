import WhatYouGetService from "@/components/Services/WhatYouGetService";
import { ServiceLineType, bannerInfoType } from "@/types/services";
import Head from "next/head";

const AppDevelopment = () => {
  const bannerInfo: bannerInfoType = {
    bannerTitle: "Build Engaging and Successful Mobile Apps for Android & iOS",
    bannerDescription:
      "Today's mobile landscape demands engaging experiences that drive user loyalty and business success. Our experienced team of Android and iOS developers specializes in designing and building custom mobile applications tailored to your unique goals. From intuitive user interfaces to seamless performance, we focus on delivering apps that not only meet your requirements but exceed user expectations. Whether you’re launching a startup or scaling an enterprise, we transform your vision into powerful, feature-rich mobile apps that drive customer loyalty, boost brand visibility, and generate measurable results across both Android and iOS platforms.",
    // bannerImg:"/images/services/app_development.svg",
    bannerImg:
      "https://lottie.host/113e1af0-3c70-4799-9637-2841ad6055cf/ljMELfz5WR.lottie",
  };

  const getServiceTitle: string = "What You Get from App Development Service";

  const lineService: ServiceLineType[] = [
    {
      title: "Visually Appealing UI Design",
      description:
        "Our design team creates beautiful and user-friendly user interfaces (UI) that reflect your brand identity. We understand the importance of aesthetics and usability in keeping users engaged with your app.",
    },
    {
      title: "Native App Development (Android & iOS)",
      description:
        "Our expert developers build high-performing apps specifically designed for each platform (Android or iOS). This ensures your app takes full advantage of the unique features and functionalities of each device, delivering a seamless user experience.",
    },
    {
      title: "Scalability & Performance",
      description:
        "We build apps that can adapt and grow with your business. Our development approach ensures your app can handle increasing user traffic and maintain optimal performance as your app evolves.",
    },
    {
      title: " App Store Optimization (ASO)",
      description:
        "We optimize your app listing in the app stores (Google Play Store & Apple App Store) to improve discoverability. This includes crafting compelling descriptions, choosing relevant keywords, and utilizing high-quality screenshots and app previews.",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We provide a comprehensive launch strategy to ensure your app reaches its target audience. We also offer ongoing maintenance and support plans to keep your app functioning flawlessly, address any issues that may arise, and incorporate future updates.",
    },
    {
      title: "Security & Compliance",
      description:
        "We prioritize robust security measures to protect your app and user data. Our development process adheres to the latest security best practices and relevant app store guidelines.",
    },
  ];
  return (
    <div>
      <Head>
        <title>App Development - NeuronsNest</title>
        <meta
          name="description"
          content="Build engaging and successful mobile apps for Android and iOS with NeuronsNest. Our expert developers provide visually appealing UI design, native app development, scalability, performance, app store optimization (ASO), ongoing support, and security & compliance."
        />
        <meta
          name="keywords"
          content="App development, Android app development, iOS app development, neurons, neuronsnest, UI design, Native app development, Scalability, Performance, App store optimization, Ongoing support, Security, Compliance, NeuronsNest, neurons, neuronsnest, best agency, best software agency, best web development agency,"
        />
        <meta name="author" content="NeuronsNest " />
        <meta
          property="og:title"
          content="Build Engaging and Successful Mobile Apps for Android & iOS - NeuronsNest"
        />
        <meta
          property="og:description"
          content="Today's mobile landscape demands engaging experiences that drive user loyalty and business success. Our expert Android and iOS developers craft custom apps that exceed user expectations. Transform your vision into a powerful mobile app with NeuronsNest."
        />
        <meta
          property="og:image"
          content="/images/banner_app_development.jpg"
        />
        <meta
          property="og:url"
          content="https://example.com/mobile-app-development"
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

export default AppDevelopment;
