import Head from "next/head";
import SectionHeader from "../Common/SectionHeader";

const Workflow = () => {
  const workflowInfo = [
    {
      title: "Research",
      description:
        "Comprehensive research effectively informs and drives our creative design process.",
      img: "/images/workflow/research.svg",
    },
    {
      title: "Designing",
      description:
        "Creativity flourishes in design, transforming ideas into visually captivating solutions.",
      img: "/images/workflow/Designing.svg",
    },
    {
      title: "Development",
      description:
        "Innovation emerges through focused development, effortlessly shaping ideas.",
      img: "/images/workflow/development.svg",
    },
    {
      title: "Deliver",
      description:
        "Our dedication is to perfect execution and punctual delivery.",
      img: "/images/workflow/Deliver.svg",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-4 mb-30">
      <Head>
        <title>Our Workflow - NeuronsNest</title>
        <meta
          name="description"
          content="Discover NeuronsNest's workflow process: research, design, development, and delivery. Our organized approach guarantees projects that exceed expectations."
        />
      </Head>
      <SectionHeader
        headerInfo={{
          subtitle: "Our Workflow",
          description: `Unleashing Workflow Excellence
              Our process starts with in-depth research, moves on to innovative design, meticulous development, and ends with a smooth delivery.`,
        }}
      />

      <div className="flex flex-wrap mt-10">
        {workflowInfo.map((workflow, index) => (
          <div
            key={index} // ✅ Key added here
            className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div className="px-6">
              <img
                alt="workflow img"
                src={workflow.img}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
              />
              <div className="pt-6 text-center">
                <h1 className="text-xl font-serif font-bold leading-normal mt-0 mb-2 text-black dark:text-white">
                  {workflow.title}
                </h1>
                <p className="text-blue-gray-700 text-base font-light leading-relaxed mt-0 mb-4">
                  {workflow.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
