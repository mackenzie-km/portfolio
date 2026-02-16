import { useRef } from "react";
import { motion } from "motion/react";

import headshot from "./assets/about/headshot.jpeg";

export default function About() {
  const ref = useRef(null);

  return (
    <div class="page-container">
      <div ref={ref} id="about" className="flex flex-col gap-16 md:flex-row">
        <div className="flex-auto items-center order-2 text-left md:order-1 relative md:min-h-fit">
          <div className="max-w-[1100px] mx-auto px-8 lg:px-6 py-20">
            <div class="flex flex-column my-8 gap-4">
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                class="flex flex-auto justify-center text-[2rem] md:items-center"
              >
                Hi 👋! I’m Mackenzie (but you can call me Mack). I create
                software that helps people do their best work.
              </motion.div>
              <div class="flex items-center justify-center order-1 md:order-2">
                <div
                  class="relative rounded-3xl
           shadow-[0_20px_40px_rgba(0,0,0,0.08)]  bg-gradient-to-br from-[var(--color-accent-dark)] to-[var(--color-accent-med)] opacity-100 py-2 px-2 mt-2 md:mt-0"
                >
                  <img
                    class="rounded-3xl min-h-[50px] min-w-[50px] max-w-[100px] max-h-[100px] md:max-w-[150px] md:max-h-[150px]"
                    id="profile-photo"
                    src={headshot}
                    alt="Profile Photo"
                  />
                </div>
              </div>
            </div>
          </div>
          <section className="relative pt-8 pb-16">
            <div className="absolute inset-0 bg-[#f8f5f2] h-auto -z-10" />
            <div className="absolute inset-0 bg-white top-auto  -z-10" />
            <div className="max-w-6xl mx-auto text-center px-16 p-8">
              <h2 className="text-2xl md:text-2xl font-semibold font-[var(--font-nunito)] pb-8">
                About Me:
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <SpecialtyCard
                  icon="</>"
                  title="Coding"
                  description="I enjoy solving problems with code and creating apps that help teams succeed."
                />

                <SpecialtyCard
                  icon="💬"
                  title="Mentorship"
                  description="I mentor people inside and outside of work. Mentorship makes all of us stronger."
                />

                <SpecialtyCard
                  icon="👩‍🍳"
                  title="Cooking"
                  description="I have a passion for cooking and share recipes inspired by family and international friends."
                />
              </div>
            </div>
          </section>
          <section className="relative pt-8 pb-16  bg-[#f1ece7]">
            <div className="max-w-3xl mx-auto px-16 p-8">
              <h2 className="text-2xl md:text-2xl font-semibold font-[var(--font-nunito)] text-center pt-4">
                My Story:
              </h2>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                class="mt-8 mb-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]"
              >
                I majored in Animal Science @ UC Davis and spent several years
                working in biotech. While there, I began automating my own work
                with Excel and SQL, and learned how to reduce errors and free up
                my time for more important work. That discovery led me back to
                school in 2019 to study software engineering, and I’ve been
                working as an engineer since 2020.
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                class="mt-8 mb-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]"
              >
                For me, the "who" always comes before the "what." I care deeply
                about my teammates and the people we’re building for. Tech
                stacks, tools, and coding preferences matter, but what I really
                get excited about is working alongside others to help others.
                This is why I've always loved the mentoring aspects of software
                engineering. And this is also one reason why I mentor
                international students outside of work.
              </motion.div>
              <motion.div
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5 }}
                class="mt-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]"
              >
                Feel free to explore my projects, writing, and more about me.
                Let’s build something together!
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SpecialtyCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-4xl mb-6 text-[#d68c45]">{icon}</div>

      <h3 className="text-xl font-semibold mb-4 font-[var(--font-nunito)]">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 font-medium text-gray-800 hover:underline"
      >
        Learn more →
      </a>
    </div>
  );
}
