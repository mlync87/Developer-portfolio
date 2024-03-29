import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Martin Lynch</span>
          </h1>
          {/* perhaps input some more custom details-perhaps some colloquialisms depending on business model */}
          {/* maybe add some more images to go along with this text */}
          {/* Review fonts */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Full Stack Software Developer based in Ireland.{" "}
            <br className="sm:block hidden" />
            I'm currently working on a few personal projects, which I will Show
            on this portfolio
          </p>
        </div>
      </div>
      {/* input marias profile image here */}
      {/* Wait to sit down with client to see if they want any rotation/spotlight effects */}
      <ComputersCanvas />

      {/* here is where i will create the loading bar that sits at bottom middle of screen */}
      <div
        className="absolute xs:bottom-10
      bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl 
          border-4 border-secondary flex 
          justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full
            bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
