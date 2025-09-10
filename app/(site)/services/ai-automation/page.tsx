import WhatYouGetService from "@/components/Services/WhatYouGetService";
import { ServiceLineType, bannerInfoType } from "@/types/services";
import Head from "next/head";

const UiUx = () => {
  const bannerInfo: bannerInfoType = {
    bannerTitle: "Work Less, Achieve More — Experience the Power of our Intelligent AI Automation",
    bannerDescription:
      "At NeuronsNest, we believe your time is best spent growing your business — not juggling repetitive tasks. Our AI solutions take the hard work off your hands — streamlining operations, reducing costs, and boosting productivity so you can focus on what truly matters: growing your business. By integrating our AI into your marketing and CRM strategies, you can build stronger, more meaningful relationships with your audience, increase conversion rates, and scale your operations seamlessly. Our tools not only optimize customer journeys but also empower your team to focus on strategic growth initiatives rather than manual processes.",
    // bannerImg: "/images/services/Ai-Automation.png",
    bannerImg: "https://lottie.host/c2395a2f-5e74-474f-8532-23c9bc1cc71b/9v8J1AgwKt.lottie",
  };

  const getServiceTitle: string = "What You Get from AI Automation Service";
  const lineService: ServiceLineType[] = [
    {
      title: "Automated Business Workflows",
      description:
        "We design AI systems that automate repetitive tasks, from data entry and scheduling to customer support. This increases efficiency, reduces operational costs, and frees up your team to focus on high-impact work.",
    },
    {
      title: "AI-Powered Decision Making",
      description:
        "Our solutions analyze vast amounts of data in real time to uncover actionable insights. From predictive analytics to intelligent reporting, you get smarter decision-making tools that drive growth.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Leverage AI to understand and interact with human language. From chatbots to sentiment analysis, our NLP solutions enhance user communication and enable seamless customer experiences.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "We build AI models that interpret and process visual information — useful for object detection, facial recognition, and image classification. Ideal for security, quality control, and user interaction use cases.",
    },
    {
      title: "Personalization & Recommendation Engines",
      description:
        "Boost engagement with personalized user experiences. Our AI systems dynamically recommend content, products, or actions based on user behavior and preferences — increasing conversions and satisfaction.",
    },
    {
      title: "Scalable & Secure AI Infrastructure",
      description:
        "We deploy AI models on cloud-native infrastructure that scales with your needs while maintaining enterprise-level security, performance, and compliance standards.",
    },
  ];

  return (
    <div>
      <Head>
        <title>AI Automation Services - NeuronsNest</title>
        <meta
          name="description"
          content="Unlock the full potential of your business with NeuronsNest's AI Automation Services. From intelligent chatbots and voice assistants to workflow automation and smart integrations, we empower organizations to streamline operations, enhance customer experience, and boost productivity through advanced AI solutions."
        />
        <meta
          name="keywords"
          content="AI automation, chatbots, voice assistants, workflow automation, business automation, intelligent systems, AI solutions, NeuronsNest, productivity tools, process automation, smart assistants, AI integrations"
        />
        <meta name="author" content="NeuronsNest" />
        <meta
          property="og:title"
          content="AI Automation Services - NeuronsNest"
        />
        <meta
          property="og:description"
          content="Transform your operations with NeuronsNest's AI Automation Services. Leverage intelligent automation, chatbots, workflow optimization, and smart integrations to drive efficiency and innovation across your business."
        />
        <meta property="og:image" content="/images/banner_ai_automation.jpg" />
        <meta
          property="og:url"
          content="https://example.com/ai-automation-services"
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

export default UiUx;
