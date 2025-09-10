import Carouseles from "@/components/Carousel/page";
import { notFound } from "next/navigation";
import PortfolioDashboard from "./portfolioDashboard";

interface FeatureDescription {
  subtitle: string;
  details: string;
}

interface ProjectDetails {
  home?: string[];
  features?: string[];
  featuresDescription?: FeatureDescription[];
  dashboard?: string[];
  dashboardDescription?: FeatureDescription[];
}

interface PortfolioItem {
  id: number;
  projectName: string;
  bannerTitle: string;
  bannerDescription: string;
  bannerImg: string;
  projectDetails: ProjectDetails[];
}

interface PortfolioPageProps {
  params: {
    id: string;
  };
}

async function getPortfolioData(): Promise<PortfolioItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/portfolio.json`);
  if (!res.ok) throw new Error("Failed to fetch portfolio data");
  return res.json();
}

const PortfolioDetailsPage = async ({ params }: PortfolioPageProps) => {
  const { id } = await params;

  const portfolioData = await getPortfolioData();
  const project = portfolioData.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  const dashboardDescriptions = project.projectDetails
    .flatMap((detail) => detail.dashboardDescription || [])
    .slice(0, 4);

  const dashboardImages = project.projectDetails
    .flatMap((d) => d.dashboard || [])
    .slice(0, 5);

  const featuresImages = project.projectDetails
    .flatMap((detail) => detail.features || [])
    .slice(0, 10);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-gray-600 body-font mt-10 md:mt-14 shadow rounded-lg p-4 sm:p-6 md:p-8">
      {/* Banner Section */}
      <div className="py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Banner Text */}
          <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-snug">
              {project.bannerTitle}
            </h4>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-justify text-black dark:text-slate-300">
              {project.bannerDescription}
            </p>
          </div>

          {/* Right Banner Image */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px]">
              <img
                src={project.bannerImg}
                alt={`project-detail-image-${project.id}`}
                className="rounded-lg object-cover w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-2 sm:px-4 mx-auto max-w-7xl">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs sm:text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
              Features
            </p>
            <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black dark:text-slate-50">
              {project.bannerTitle}
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 mt-10 sm:mt-12 lg:mt-20 gap-y-8 sm:gap-y-10 lg:grid-cols-5 gap-x-4">
            {/* Feature Descriptions */}
            <div className="space-y-6 sm:space-y-8 lg:pr-12 xl:pr-16 lg:col-span-2">
              {project.projectDetails
                .flatMap((detail) => detail.featuresDescription || [])
                .slice(0, 5)
                .map((desc, i) => (
                  <div className="flex items-start" key={i}>
                    {/* SVG ICONS */}
                    {i === 0 && (
                      <svg
                        className="flex-shrink-0 text-green-500 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    )}
                    {i === 1 && (
                      <svg
                        className="flex-shrink-0 text-blue-600 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {i === 2 && (
                      <svg
                        className="flex-shrink-0 text-red-500 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    )}

                    {/* Description Text */}
                    <div className="ml-3 sm:ml-4 md:ml-5">
                      <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
                        {desc.subtitle}
                      </h3>
                      <p className="mt-2 sm:mt-3 text-sm sm:text-base text-black dark:text-slate-300">
                        {desc.details}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Side Carousel */}
            <div className="lg:col-span-3">
              <div className="w-full max-w-[600px] sm:max-w-[800px] md:max-w-[1000px] mx-auto">
                <Carouseles images={featuresImages}></Carouseles>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Component */}
      <PortfolioDashboard
        dashboardDescription={dashboardDescriptions}
        dashboardImages={dashboardImages}
      />
    </div>
  );
};

export default PortfolioDetailsPage;
