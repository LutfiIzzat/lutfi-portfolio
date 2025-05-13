import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Slide-in animation utility
const slideIn = (direction = "left", type = "spring", delay = 0, duration = 0.75) => {
  let x = direction === "left" ? -100 : 100;
  return {
    hidden: { opacity: 0, x },
    show: {
      opacity: 1,
      x: 0,
      transition: { type, delay, duration, ease: "easeOut" },
    },
  };
};

// AnimatedSection wrapper
const AnimatedSection = ({ children, direction = "right", delay = 0 }) => {
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
      variants={slideIn(direction, "spring", delay, 0.75)}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-screen max-w-full overflow-y-hidden bg-[#130918] text-[#ECE2D0] py-20 px-4 md:px-20 lg:px-40"
    >
      {/* Parent Flex for Left (Education & Work) and Right (Tech Stack) */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column: Education + Work Experience */}
        <div className="w-full md:w-2/3 flex flex-col gap-20">
          {/* Education */}
          <AnimatedSection direction="right" delay={0}>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">🎓 Education</h3>
              <div className="h-1 w-24 bg-[#ECE2D0] mx-auto mb-6 rounded" />
              <div className="space-y-6 text-md md:text-lg pl-4">
                <div>
                  <p className="font-semibold text-lg">Multimedia University</p>
                  <p>Bachelor of Computer Science (Hons.) Game Development</p>
                  <p className="text-sm text-[#c4b4a5]">Sep 2021 – Mar 2025</p>
                  <p className="text-sm text-[#c4b4a5]">CGPA: 3.56</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Multimedia University</p>
                  <p>Foundation in Information Technology</p>
                  <p className="text-sm text-[#c4b4a5]">July 2020 – July 2021</p>
                  <p className="text-sm text-[#c4b4a5]">CGPA: 3.65</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Work Experience */}
          <AnimatedSection direction="right" delay={0.2}>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">💼 Work Experience</h3>
              <div className="h-1 w-24 bg-[#ECE2D0] mx-auto mb-6 rounded" />
              <div className="space-y-6 text-md md:text-lg pl-4">
                <div>
                  <p className="font-semibold text-lg">Nimbus Games</p>
                  <p>Game Programmer (Intern)</p>
                  <p className="text-sm text-[#c4b4a5]">Aug 2024 – Oct 2024</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Abata Commerce</p>
                  <p>Fullstack Developer (Intern)</p>
                  <p className="text-sm text-[#c4b4a5]">May 2023 – Jun 2023</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column: Tech Stack */}
        <div className="w-full md:w-1/3">
          <AnimatedSection direction="left" delay={0.4}>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-center mb-8">🧰 Tech Stack</h3>
              <div className="h-1 w-24 bg-[#ECE2D0] mx-auto mb-6 rounded" />
              <div className="space-y-6 text-md md:text-lg pl-4">
                <div>
                  <p className="font-semibold text-lg">Programming Languages</p>
                  <p className="text-[#c4b4a5]">C#, Python, Java, SQL, PHP</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Game Engines</p>
                  <p className="text-[#c4b4a5]">Unity, Gdevelop, Phaser, Unreal Engine 5, Monogame</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Version Control</p>
                  <p className="text-[#c4b4a5]">GitHub, Perforce, Unity Version Control</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;


