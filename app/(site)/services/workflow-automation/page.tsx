import WhatYouGetService from "@/components/Services/WhatYouGetService";
import { ServiceLineType, bannerInfoType } from "@/types/services";
import Head from "next/head";

const WordpressShopify = () => {
  const bannerInfo: bannerInfoType = {
    bannerTitle:
      "Boost Productivity with AI-Powered Workflow Automation Solutions",
    bannerDescription:
      "NeuronsNest extends smart AI-powered workflow automation services that make operations more efficient, minimize on manual work, and speed up productivity. Our services assist businesses in automating repetitive tasks to improve workflow efficiency that are consistently done, make decisions based on data in real time, and determine outcomes that are more accurate. At NeuronsNest, our smart automation tools free your team to concentrate on strategic work by managing everyday operations automatically, whether you are a new business or an established one. Our platform makes complicated workflows easier by handling everything from scheduling tasks to smart approvals and notifications. NeuronsNest is your trusted partner for business process automation, AI workflow optimization, and digital transformation. Embrace the future of work with them.",
    // bannerImg: "/images/services/Workflow-Automation.png",
    bannerImg:
      "https://lottie.host/4b5fa6f6-20c8-4459-976a-552ec11dc406/i0yp78iumY.lottie",
  };

  const getServiceTitle: string = "What You Get from SEO Service";

  const lineService: ServiceLineType[] = [
    {
      title: "Task Automation",
      description:
        "Automate repetitive, rule-based tasks across departments to reduce manual effort, eliminate errors, and free up your team for more strategic work.",
    },
    {
      title: "Real-Time Data Processing",
      description:
        "Enable instant decision-making with real-time data collection, analysis, and processing integrated into your workflows for smarter business outcomes.",
    },
    {
      title: "Smart Approvals & Notifications",
      description:
        "Use intelligent workflows to automate approval chains and notify the right stakeholders at the right time—ensuring timely decisions and better compliance.",
    },
    {
      title: "Cross-Platform Integration",
      description:
        "Connect all your business tools—CRMs, ERPs, communication apps, and more—into one seamless automated system that shares data and triggers workflows.",
    },
    {
      title: "Custom Workflow Design",
      description:
        "We design tailor-made automation flows aligned with your specific operations—no bloated tools, just exactly what you need to work faster and smarter.",
    },
    {
      title: "Scalable & Secure Infrastructure",
      description:
        "Built for growth and peace of mind, our automation systems are scalable, cloud-ready, and fortified with enterprise-grade security protocols.",
    },
  ];

  return (
    <div>
      <Head>
        <title>Workflow Automation Services - NeuronsNest</title>
        <meta
          name="description"
          content="Streamline your business operations with NeuronsNest's Workflow Automation services. We design intelligent, automated systems to eliminate manual tasks, boost productivity, reduce errors, and drive efficiency using the latest in AI and automation technologies."
        />
        <meta
          name="keywords"
          content="workflow automation, WordPress development, Shopify experts, AI automation, digital transformation, business efficiency, productivity tools, smart workflows, NeuronsNest"
        />
        <meta name="author" content="NeuronsNest" />
      </Head>

      <WhatYouGetService
        bannerInfo={bannerInfo}
        getServiceTitle={getServiceTitle}
        lineService={lineService}
      />
    </div>
  );
};

export default WordpressShopify;
