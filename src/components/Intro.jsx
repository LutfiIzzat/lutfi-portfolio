import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import lutfi from "/Profile/lutfi.jpg";
import job from "/Profile/job.png";
import job2 from "/Profile/job2.png";
import jobTop from "/Profile/job4.jpg";

// Inline fadeIn utility
const fadeIn = (direction = "up", type = "spring", delay = 0, duration = 0.75) => {
  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = 100;
      break;
    case "right":
      x = -100;
      break;
    case "up":
      y = 100;
      break;
    case "down":
      y = -100;
      break;
  }

  return {
    hidden: { opacity: 0, x, y },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

const AnimatedSection = ({ children, direction = "up", delay = 0 }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(direction, "spring", delay, 0.75)}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Intro = () => {
  return (
    <section
      id="Intro"
      className="w-screen max-w-full overflow-y-hidden bg-[#130918] text-[#ECE2D0] py-20 px-4 md:px-20 lg:px-40"
    >
      {/* Section 1: Image Left, Text Right */}
      <AnimatedSection direction="up" delay={0}>
        <div className="w-full flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2">
            <img
              src= {lutfi}
              alt="About Me"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 px-0 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">About Me</h3>
            <p className="text-md md:text-lg">
              I'm a passionate developer with a focus on creativity and clean design. I love building web experiences that are both functional and beautiful.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Section 2: Image Right, Text Left */}
      <AnimatedSection direction="up" delay={0.2}>
        <div className="w-full mt-20 flex flex-col md:flex-row-reverse gap-10 items-center overflow-y-hidden">

            {/* Right Side: Top Image + Two Side-by-Side Images */}
            <div className="w-full md:w-1/2 flex flex-col gap-4">
            
            {/* Enlarged Top Image with taller height */}
            <img
                src={jobTop}
                alt="Top Full"
                className="w-full h-[460px] md:h-[450px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
            />

            {/* Bottom Two Images Side by Side */}
            <div className="flex flex-col sm:flex-row gap-4">
                <img
                src={job}
                alt="Left Half"
                className="w-full sm:w-1/2 h-[200px] md:h-[300px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
                <img
                src={job2}
                alt="Right Half"
                className="w-full sm:w-1/2 h-[200px] md:h-[300px] object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
                />
            </div>
            </div>

            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 px-0 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">What I Do</h3>
            <p className="text-md md:text-lg">
                From frontend UI development to backend logic, I enjoy crafting full-stack solutions and solving meaningful problems with code.
            </p>
            </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Intro;
