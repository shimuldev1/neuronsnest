"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Mohammad Anik",
    title: "CEO",
    image: "/images/teams/Anik_CEO.jpg",
  },
  {
    name: "Romena Afrose",
    title: "COO",
    image: "/images/teams/Romena_COO.jpg",
  },
  {
    name: "Rana Hossain",
    title: "CTO",
    image: "/images/teams/Rana_CTO.jpg",
  },
  {
    name: "Tamim Howlader",
    title: "CMO",
    image: "/images/teams/Tamim_CMO.jpg",
  },
  {
    name: "Omayer Mahmud",
    title: "CDO",
    image: "/images/teams/Omayer_CDO.jpg",
  },
  {
    name: "Fahim",
    title: "Software Engineer",
    image: "/images/teams/Fahim_SoftwareEng.jpg",
  },

  {
    name: "Rhythm",
    title: "Software Engineer",
    image: "/images/teams/Rhythm_SoftwareEng.jpg",
  },
  {
    name: "Tanjib",
    title: "Software Engineer",
    image: "/images/teams/Tanjib_FrontedDev.jpg",
  },
  {
    name: "Immam Hossain",
    title: "Software Engineer",
    image: "/images/teams/Immam_SoftwareEng.jpg",
  },
  {
    name: "Imran",
    title: "Frontend Engineer",
    image: "/images/teams/Imran_FrontedDev.jpg",
  },

  {
    name: "Shafi",
    title: "Frontend Developer",
    image: "/images/teams/Shafi_FrontedDev.jpg",
  },
  {
    name: "Hassan",
    title: "Frontend Engineer",
    image: "/images/teams/Hasan_SoftwareEng.jpg",
  },
  // {
  //   name: "Md Thowhid",
  //   title: "Frontend Engineer",
  //   image: "/images/teams/Thowhiduzzaman_FrontedDev.jpg",
  // },
  {
    name: "Shakil Ahmed",
    title: "Account Manager",
    image: "/images/teams/Shakil_Account.jpg",
  },
  {
    name: "Akhi",
    title: "UI/UX Designer",
    image: "/images/teams/Akhi_UI_UX.jpg",
  },
  {
    name: "Yasmin",
    title: "Support Executive",
    image: "/images/teams/Yasmin_SupportExcuative.jpg",
  },
];
const About = () => {
  return (
    <div className="flex justify-center  text-gray-900  dark:border-strokedark dark:bg-blacksection ">
      <div className="border-white  py-16 px-4 sm:px-6 lg:px-8 min-h-screen container">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="mt-28 text-4xl font-extrabold sm:text-5xl drop-shadow dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-black dark:text-slate-400">
            This is our dedicated and talented team who work together
            enthusiastically to materialize your ideas.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto my-20 ">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="group bg-white backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out border border-white/60 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
            >
              <div className="relative w-full h-80 overflow-hidden p-3 rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500 ease-in-out"
                />
              </div>
              <div className="p-6 text-center text-black ">
                <h3 className="text-2xl mb-1 font-semibold dark:text-white">
                  {member.name}
                </h3>
                <h2 className="text-sm font-semibold text-black dark:text-slate-300">
                  {member.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
