import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState, useLayoutEffect } from "react";
import { imageMap } from "./constants/mentorship-photos";

function useParallax(scrollYProgress, ref, maxPercent = 0.5) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [ref]);

  return useTransform(scrollYProgress, [0, 1], [0, -height * maxPercent]);
}

function Image({ id }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // scroll as full image enters/leaves viewport
  });

  const y = useParallax(scrollYProgress, ref, 0.5); // moves more (50% of image height)

  return (
    <section className="relative flex snap-start justify-center">
      <div
        ref={ref}
        className="relative bg-gray-100 shadow-xl w-[65vw] md:w-[50vw] lg:w-[35vw] aspect-[3/4] flex items-center justify-center"
      >
        <img
          src={imageMap[id].path}
          alt="Various images of group mentorship workshops"
          className="h-full w-full object-cover [clip-path:inset(0_round_14px)]"
        />

        <motion.h2
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
          className="
            absolute top-[25%] -right-[25%] md:-right-[33%]
            inline-block whitespace-nowrap
            font-pacifico text-[1.5rem] sm:text-[2rem]
            text-[color:var(--color-accent-dark)]
            backdrop-blur-xl
            backdrop-grayscale
            bg-gradient-to-r
            from-[var(--color-accent-light)]
            to-[var(--color-accent-dark)]
            [clip-path:inset(0_round_14px)]
            px-6 py-3 shadow-xl
          "
        >
          {imageMap[id].text}
        </motion.h2>
      </div>
    </section>
  );
}

export default function Mentorship() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div class="page-container">
      <div class="mb-[16px]">
        <p>
          As a software engineer, I believe that everyone on a team has
          something to teach others. That’s why I make a point of organizing
          both one-off and recurring meetings where engineers of all skill
          levels can share tips and tricks. You can also check out my{" "}
          <a href="https://medium.com/@mackenzie.gonzales.k_98971" target="#">
            blog
          </a>{" "}
          to read more about my approach to engineering and how I work.
        </p>
        <p>
          Outside of work, I spend a lot of time volunteering as a mentor for
          international students. I’ve had the privilege of doing this in five
          cities: Davis (CA), Urbana (IL), Chicago (IL), Evanston (IL), and
          Tokyo. Sometimes, I meet with students 1:1 to give feedback on their
          resumes or help them practice English. Other times, I help organize
          workshops and events where students can learn practical skills or
          explore American culture. Sometimes I'm the main presenter, and other
          times, I'm making advertisements, ordering food, or coordinating other
          details. Most of these activities have been through the organization{" "}
          <a href="https://www.internationalmentorship.org/" target="#">
            International Student Mentorship Program
          </a>
          . Feel free to check out the website - or some pictures below!
        </p>
      </div>
      <div className="snap-y snap-mandatory flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6].map((image) => (
          <Image key={image} id={image} />
        ))}

        <motion.div
          className="fixed bottom-[50px] left-0 right-0 h-[5px] origin-left bg-[color:var(--color-accent-med)]"
          style={{ scaleX }}
        />
      </div>
    </div>
  );
}
