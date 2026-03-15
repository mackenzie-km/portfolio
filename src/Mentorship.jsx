import { motion } from "motion/react";
import { imageMap } from "./constants/mentorship-photos";

function MentorshipCard({ id, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 overflow-hidden"
    >
      <img
        src={imageMap[id].path}
        alt={imageMap[id].text}
        className="w-full aspect-[4/3] object-cover"
      />
      <div className="px-6 py-4">
        <p className="text-base font-semibold font-[var(--font-nunito)] text-neutral-700">
          {imageMap[id].text}
        </p>
      </div>
    </motion.div>
  );
}

export default function Mentorship() {
  return (
    <div className="page-container">
      {/* Page header */}
      <div className="bg-[#f8f5f2] py-16">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-6">
          <div className="flex flex-col md:flex-row my-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col flex-auto gap-4"
            >
              <h1 className="relative inline-block w-fit text-3xl md:text-4xl font-semibold font-[var(--font-nunito)] pb-4">
                Mentorship
                <span className="absolute left-0 bottom-0 h-[4px] w-[60%] rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent-med)]" />
              </h1>
              <p className="text-neutral-600 font-[var(--font-nunito)] text-[1.05rem] mt-12 leading-relaxed">
                As a software engineer, I believe that everyone on a team has
                something to teach others. That's why I make a point of
                organizing both one-off and recurring meetings where engineers
                of all skill levels can share tips and tricks. You can also
                check out my{" "}
                <a
                  href="https://medium.com/@mackenzie.gonzales.k_98971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  blog
                </a>{" "}
                to read more about my approach to engineering and how I work.
              </p>
              <p className="text-neutral-600 font-[var(--font-nunito)] text-[1.05rem] leading-relaxed">
                Outside of work, I spend a lot of time volunteering as a mentor
                for international students. I've had the privilege of doing this
                in five cities: Davis (CA), Urbana (IL), Chicago (IL), Evanston
                (IL), and Tokyo. Most of these activities have been through the
                organization{" "}
                <a
                  href="https://www.internationalmentorship.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  International Student Mentorship Program
                </a>
                . Feel free to check out the website — or some pictures below!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center justify-center shrink-0 mt-16"
            >
              <div className="relative rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[var(--color-accent-dark)] to-[var(--color-accent-med)] py-2 px-2">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1WhYii9qu4IBLqBGGTD26E6y8c37vEX8&ehbc=2E312F"
                  width="320"
                  height="240"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Photo grid */}
      <div className="max-w-[1100px] mx-auto px-8 lg:px-6 pt-8 pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((id, i) => (
            <MentorshipCard key={id} id={id} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </div>
  );
}
