"use client";
import { Testimonial } from "@/types/testimonial";
// import SectionTitle from "../Common/SectionTitle";
import image1 from "@/public/images/brand/CST.png";
import image2 from "@/public/images/brand/Chalkmark-tech.png";
import image3 from "@/public/images/brand/Farass.png";
import image4 from "@/public/images/brand/Madina.png";
import SingleTestimonial from "./SingleTestimonial";

import SectionTitle from "@/components/Common/SectionTitle";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import SectionTitle from "@/components/Common/SectionTitle";
const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Aarav Hossain",
    designation: "CEO @FinovateX",
    content:
      "NeuronsNest helped us automate time-consuming tasks across departments. Their AI tools save us hours weekly and boost team productivity. Highly recommend for startups looking to scale efficiently!",
    image: image1,
    star: 5,
  },
  {
    id: 2,
    name: "Sarah Khan",
    designation: "CMO @Shoploop",
    content:
      "We saw a 40% boost in engagement after integrating NeuronsNest’s AI marketing system. Personalized campaigns and automated follow-ups now run smoothly — with zero extra effort.",
    image: image2,
    star: 5,
  },
  {
    id: 3,
    name: "Daniel Rahman",
    designation: "Operations Manager @CodeLift",
    content:
      "Their workflow automation helped us centralize tasks and eliminate manual errors. Our operations team now manages onboarding and daily checklists without jumping between tools.",
    image: image3,
    star: 5,
  },
  {
    id: 4,
    name: "Lina Ahmed",
    designation: "Co-founder @Mediplus",
    content:
      "Launching our SaaS platform with NeuronsNest’s tech support was a game-changer. The custom development and automation stack let us move faster with fewer resources.",
    image: image4,
    star: 5,
  },
  {
    id: 5,
    name: "Kawsar Uddin",
    designation: "CTO @NextTech Agency",
    content:
      "We transitioned from n8n to NeuronsNest for greater flexibility and intelligent automation. Their AI-powered agents streamlined complex flows and significantly reduced development effort.",
    image: image1,
    star: 5,
  },

  {
    id: 6,
    name: "Emily Zhang",
    designation: "Founder @BrightDesk",
    content:
      "NeuronsNest unified our CRM, AI workflows, and core systems with zero friction. Everything operates seamlessly now — and client satisfaction has noticeably improved.",
    image: image2,
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="animate_top mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 mt-10">
      <div className="mx-auto">
        <SectionTitle
          title="What Our Clients Say About Us"
          paragraph="Businesses of all sizes trust NeuronsNest to power their growth with smart automation, seamless workflows, and scalable tech. Here’s how we’ve helped them work smarter and grow faster."
          center
        />

        <div className="swiper mb-20">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              950: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonialData.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <SingleTestimonial testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
