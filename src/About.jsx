import { motion } from "motion/react";

import headshot from "./assets/about/headshot.jpeg";

export default function About() {
  return (
    <div class="page-container">
      {/* Hero header — matches Coding page pattern */}
      <div class="bg-[#f8f5f2] py-16">
        <div class="max-w-[1100px] mx-auto px-8 lg:px-6">
          <div class="flex flex-col md:flex-row my-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              class="flex flex-auto justify-center text-[2rem] md:items-center"
            >
              Hi 👋! I’m Mackenzie (but you can call me Mack). I create software
              that helps people do their best work.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              class="flex items-center justify-center shrink-0"
            >
              <div class="relative rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[var(--color-accent-dark)] to-[var(--color-accent-med)] py-2 px-2">
                <img
                  class="rounded-3xl min-h-[100px] min-w-[100px] max-w-[250px] md:max-w-[180px] md:max-h-[180px]"
                  id="profile-photo"
                  src={headshot}
                  alt="Profile Photo"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Me section */}
      <section className="relative pt-8 pb-16">
        <div className="absolute inset-0 bg-white -z-10" />
        <div className="max-w-6xl mx-auto text-center px-16 py-16">
          <h2 className="relative inline-block text-3xl md:text-4xl font-semibold font-[var(--font-nunito)] pb-8 mb-12">
            About Me
            <span className="absolute left-1/2 bottom-0 h-[4px] w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent-med)]" />
          </h2>

          <div className="grid gap-8 pb-4 md:grid-cols-3">
            {[
              {
                icon: "</>",
                title: "Coding",
                description:
                  "I enjoy solving problems with code and creating apps that help teams succeed.",
                delay: 0,
                url: "/coding",
              },
              {
                icon: "💬",
                title: "Mentorship",
                description:
                  "I mentor people inside and outside of work. Mentorship makes all of us stronger.",
                delay: 0.1,
                url: "/mentorship",
              },
              {
                icon: "👩‍🍳",
                title: "Cooking",
                description:
                  "I have a passion for cooking and share recipes inspired by family and international friends.",
                delay: 0.2,
                url: "/cooking",
              },
            ].map(({ icon, title, description, delay, url }) => (
              <SpecialtyCard
                key={title}
                icon={icon}
                title={title}
                description={description}
                delay={delay}
                url={url}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p class="mt-12 mb-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]">
              I studied Animal Science at UC Davis and spent several years in
              biotech, where I began automating my work with Excel and SQL to
              reduce errors and focus on higher-impact problems. That experience
              led me back to school in 2019 to study software engineering, and
              I've been working as an engineer since 2019.
            </p>
            <p class="mt-8 mb-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]">
              For me, the "who" comes before the "what." I care deeply about my
              teammates and the people we're building for. Beyond the tech
              stack, I'm motivated by collaboration, mentorship, and building
              things that genuinely help others—including mentoring
              international students outside of work.
            </p>
            <p class="mt-8 max-w-3xl mx-auto text-[1.05rem] leading-relaxed text-neutral-700 font-[var(--font-nunito)]">
              Feel free to explore my projects, writing, and more about me.
              Let's build something together — reach out at{" "}
              <a
                href="mailto:mackenzie.gonzales.k@gmail.com"
                className="text-[var(--color-accent-dark)] hover:underline font-medium"
              >
                mackenzie.gonzales.k@gmail.com
              </a>
              !
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function SpecialtyCard({ icon, title, description, delay = 0, url }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="text-4xl mb-6 text-[#d68c45]">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 font-[var(--font-nunito)]">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <a
        href={url}
        className="inline-flex items-center gap-2 font-medium text-gray-800 hover:underline"
      >
        Learn more →
      </a>
    </motion.div>
  );
}
