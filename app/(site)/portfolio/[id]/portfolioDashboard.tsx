import Carouseles from "@/components/Carousel/page";

interface FeatureDescription {
  subtitle: string;
  details: string;
}

interface PortfolioDashboardProps {
  dashboardDescription: FeatureDescription[];
  dashboardImages?: string[];
}

const PortfolioDashboard = ({
  dashboardDescription,
  dashboardImages = [],
}: PortfolioDashboardProps) => {
  const icons = [
    // Icon 1 - Green
    <svg
      className="flex-shrink-0 text-green-500 w-9 h-9"
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
    </svg>,
    // Icon 2 - Blue
    <svg
      className="flex-shrink-0 text-blue-600 w-9 h-9"
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
    </svg>,
    // Icon 3 - Red
    <svg
      className="flex-shrink-0 text-red-500 w-9 h-9"
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
    </svg>,
  ];

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
            Dashboard Insights
          </p>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
            Real-Time Analytics & Monitoring
          </h2>
        </div>

        <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
          {/* LEFT SIDE: Descriptions */}
          <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
            {dashboardDescription.slice(0, 5).map((desc, i) => (
              <div className="flex items-start" key={i}>
                {icons[i]}
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-white">
                    {desc.subtitle}
                  </h3>
                  <p className="mt-3 text-base text-black dark:text-slate-300">
                    {desc.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: First Dashboard Image */}
          <div className="lg:col-span-3">
            <div className="w-full max-w-[1000px] mx-auto">
              <Carouseles images={dashboardImages}></Carouseles>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioDashboard;
