import { useRef } from "react";
import { motion } from "motion/react";

import viteLogo from "/vite.svg";

export default function About() {
  const ref = useRef(null);

  return (
    <div ref={ref} id="about" class="flex flex-col gap-8 md:flex-row mx-8">
      <div class="flex-auto items-center order-2 text-left md:order-1">
        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          class="flex flex-auto justify-center text-[2rem] md:min-h-screen md:items-center md:py-[25%]"
        >
          Hi! I’m Mackenzie (but you can call me Mack). I create software that
          helps people do their best work.
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          class="md:min-h-screen py-[10%] md:py-[25%] text-[2rem]"
        >
          I majored in Animal Science @ UC Davis and spent several years working
          in biotech. While there, I began automating my own work with Excel and
          SQL, and learned how to reduce errors and free up my time for more
          important work. That discovery led me back to school in 2019 to study
          software engineering, and I’ve been working as an engineer since 2020.
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          class="md:min-h-screen py-[10%] md:py-[25%] text-[2rem]"
        >
          For me, the "who" always comes before the "what." I care deeply about
          my teammates and the people we’re building for. Tech stacks, tools,
          and coding preferences matter, but what I really get excited about is
          working alongside others to help others. This is why I've always loved
          the mentoring aspects of software engineering. And this is also one
          reason why I mentor international students outside of work.
        </motion.div>
        <motion.div
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          class="md:min-h-screen py-[10%] md:py-[25%] text-[2rem]"
        >
          Feel free to explore my projects, writing, and more about me. Let’s
          build something together!
        </motion.div>
      </div>
      <motion.div
        class="flex items-center md:sticky md:top-0 justify-center order-1 md:h-screen w-full md:w-full md:order-2"
        animate={{ rotate: [0, 10, -5, 2, 0] }}
        transition={{ duration: 2 }}
      >
        <img
          class="min-h-[200px] min-w-[200px]"
          id="profile-photo"
          src={viteLogo}
          alt="Profile Photo"
        />
      </motion.div>
    </div>
  );
}
