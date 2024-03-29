import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Flutter Developer"
              company="Information Professionals Inc."
              companyLink="https://www.ipiphil.com"
              time="March 2020 - May 2022"
              address="Quezon City, Philippines"
              work="Developed and deployed hybrid mobile applications that significantly improved user engagement and application performance."
            />

            <Details
              position="Mobile Application Developer"
              company="mClinica(SwipeRx)"
              companyLink="https://www.swiperxapp.com/"
              time="July 2019 - February 2020"
              address="Taguig, Philippines"
              work="Led the design and implementation of a pharmacy network application, improving network participation by optimizing application performance and user experience."
            />

            <Details
              position="Software Engineer"
              company="Infor"
              companyLink="https://www.infor.com/"
              time="January 2016 - September 2016"
              address="Taguig, Philippines"
              work="Developed enterprise-level software solutions, enhancing client productivity and operational efficiency."
            />

            <Details
              position="Software Engineer"
              company="Accenture Inc."
              companyLink="https://www.accenture.com/ph-en"
              time="Apr 2014 - Dec 2015 & Dec 2017 - Mar 2018"
              address="Mandaluyong, Philippines"
              work="Coding and implementation of new features for legacy systems of a power company using mainframe development projects using COBOL."
            />

          </ul>
        </div>
        </div>
    );
};

export default Experience;
