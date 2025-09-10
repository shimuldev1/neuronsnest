import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-05.svg",
    title: "Web Development",
    description:
      "At NeuronsNest, we specialize in crafting visually stunning and user-friendly websites that captivate audiences and drive results. Our unique designs reflect your brand identity, ensuring a lasting impression. Choose us for standout websites that lead to success.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/web-development`,
  },
  {
    id: 2,
    icon: "/images/icon/icon-02.svg",
    title: "Software Development",
    description:
      "Empower your business with our cutting-edge software solutions. From efficient ERP Software to streamlined Business Management Systems, our expert team develops modern, user-friendly solutions to propel your business towards success.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/software-development`,
  },
  {
    id: 3,
    icon: "/images/icon/icon-03.svg",
    title: "AI Automation",
    description:
      "At NeouronsNest, we help businesses work smarter, not harder. From powerful AI chatbots and voice agents to content automation and AI-powered advertising, we design solutions that deliver real results — saving time, cutting costs, and driving growth.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/ai-automation`,
  },
  {
    id: 4,
    icon: "/images/icon/icon-04.svg",
    title: "App Development",
    description:
      "Stay ahead in the mobile realm with our top-notch app development services. Whether it's Android or iOS, our apps are crafted with Flutter and React Native, offering cost-effective solutions without compromising on quality or functionality.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/app-development`,
  },
  {
    id: 5,
    icon: "/images/icon/icon-01.svg",
    title: "Marketing AI & CRM Automation",
    description:
      "Boost customer engagement and sales with AI-powered marketing and CRM automation. From smart chatbots to lead scoring and personalized campaigns, we help businesses automate communication and drive conversions.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/marketing`,
  },
  {
    id: 6,
    icon: "/images/icon/icon-06.svg",
    title: "Workflow Automation",
    description:
      "Streamline your operations with our workflow automation solutions. From task scheduling to system integration, we help eliminate manual work, improve efficiency, and boost productivity using cutting-edge automation tools.",
    link: `${process.env.NEXT_PUBLIC_BASE_URL}/services/workflow-automation`,
  },
];

export default featuresData;
