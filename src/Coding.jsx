import { motion } from "motion/react";
import { imageMap } from "./constants/icons";

const HERO_IMAGE = imageMap.heroImage;

function ExperienceCard({ title, logoText, bullets, icons, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="relative mt-8 bg-white rounded-2xl p-10 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <p className="text-xl font-semibold font-[var(--font-nunito)]">
          {title}
        </p>
        {logoText && (
          <span className="shrink-0 text-xs font-semibold font-[var(--font-nunito)] px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-500 border border-neutral-200">
            {logoText}
          </span>
        )}
      </div>
      <ul className="list-disc pl-5 space-y-1 text-neutral-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center mt-5 gap-3">
        {icons.map(({ href, src, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img className="tech-icon" src={src} alt={alt} title={alt} />
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Coding() {
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
                Coding
                <span className="absolute left-0 bottom-0 h-[4px] w-[60%] rounded-full bg-gradient-to-r from-[var(--color-accent-dark)] to-[var(--color-accent-med)]" />
              </h1>
              <p className="text-neutral-600 font-[var(--font-nunito)] text-[1.05rem] mt-12">
                Here are a few of my experience highlights. For the full,
                up-to-date version, see my living resume{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1rCB-4yDX2MPUPuelcwnMaLYilSQCGdpi/view?usp=sharing"
                  className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  here
                </a>
                . Please also take a look at my{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com/@mackenzie.gonzales.k_98971"
                  className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  blog
                </a>{" "}
                for many of my thoughts about software development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center justify-center shrink-0 mt-16"
            >
              <div className="relative rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] bg-gradient-to-br from-[var(--color-accent-dark)] to-[var(--color-accent-med)] py-2 px-2">
                <img
                  src={HERO_IMAGE}
                  alt="Coding workspace"
                  className="rounded-3xl object-cover max-w-[280px] md:max-w-[220px] max-h-[180px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-[1100px] mx-auto px-8 lg:px-6 pt-8 pb-32">
        <ExperienceCard
          delay={0}
          title="FloQast — External Auditor View Tech Lead"
          logoText="Full Stack"
          bullets={[
            "Enabled secure, granular auditor access by leading development of FloQast's most requested compliance feature",
            "Owned end-to-end technical execution across 110+ JIRA tickets while maintaining a <2% defect rate",
            "Directly supported enterprise sales and renewals by partnering with Sales and Compliance after demand from 7+ major customers",
            "Recognized with the 2025 Extraordinary Contributions Award for impact on the Compliance organization",
          ]}
          icons={[
            {
              href: "https://aws.amazon.com/lambda/",
              src: imageMap.lambda,
              alt: "AWS Lambda",
            },
            {
              href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              src: imageMap.javascript,
              alt: "JavaScript",
            },
            {
              href: "https://nodejs.org/",
              src: imageMap.nodejs,
              alt: "Node.js",
            },
            {
              href: "https://www.mongodb.com/",
              src: imageMap.mongodb,
              alt: "MongoDB",
            },
            { href: "https://react.dev/", src: imageMap.react, alt: "React" },
            {
              href: "https://redux.js.org/",
              src: imageMap.redux,
              alt: "Redux",
            },
            {
              href: "https://reactrouter.com/",
              src: imageMap.reactrouter,
              alt: "React Router",
            },
            {
              href: "https://styled-components.com/",
              src: imageMap.styledComponents,
              alt: "Styled Components",
            },
            { href: "https://jestjs.io/", src: imageMap.jest, alt: "Jest" },
            { href: "https://mochajs.org/", src: imageMap.mocha, alt: "Mocha" },
            {
              href: "https://testing-library.com/",
              src: imageMap.octopus,
              alt: "Testing Library",
            },
            {
              href: "https://www.atlassian.com/software/jira",
              src: imageMap.jira,
              alt: "Jira",
            },
          ]}
        />

        <ExperienceCard
          delay={0.1}
          title="FloQast — Performance & Scalability Improvements"
          logoText="Full Stack"
          bullets={[
            "Improved API response times by 6.5× through optimized MongoDB aggregation pipelines",
            "Reduced page load times by ~2 seconds (average Lighthouse Screen Index) by refactoring React components to minimize re-renders and optimizing bundle delivery",
          ]}
          icons={[
            {
              href: "https://www.mongodb.com/",
              src: imageMap.mongodb,
              alt: "MongoDB",
            },
            { href: "https://react.dev/", src: imageMap.react, alt: "React" },
            {
              href: "https://webpack.js.org/",
              src: imageMap.webpack,
              alt: "Webpack",
            },
            {
              href: "https://developer.chrome.com/docs/lighthouse/",
              src: imageMap.lighthouse,
              alt: "Lighthouse",
            },
            {
              href: "https://github.com/welldone-software/why-did-you-render",
              src: imageMap.wdyr,
              alt: "why-did-you-render",
            },
          ]}
        />

        <ExperienceCard
          delay={0.2}
          title="Personal Project — Tag & Sync"
          logoText="Full Stack"
          bullets={[
            <>
              Built an automated pipeline that syncs photos from Google Drive to
              Google Photos, using Gemini AI to generate and attach searchable
              descriptions to each image — live at{" "}
              <a
                href="https://sync.mackenziekg.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                sync.mackenziekg.dev
              </a>
            </>,
            <>
              Designed a{" "}
              <a
                href="https://github.com/mackenzie-km/drive-photos-sync/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--color-accent-dark)] underline underline-offset-2 hover:opacity-80 transition-opacity"
              >
                streaming upload architecture
              </a>{" "}
              to transfer files directly between APIs without buffering in
              memory, supporting libraries of 10,000+ photos
            </>,
            "Implemented background sync with per-file status tracking, retry logic, and duplicate detection via MD5 checksums",
          ]}
          icons={[
            {
              href: "https://developers.google.com/identity",
              src: imageMap.google,
              alt: "Google OAuth",
            },
            {
              href: "https://developers.google.com/drive",
              src: imageMap.googleDrive,
              alt: "Google Drive API",
            },
            {
              href: "https://developers.google.com/photos",
              src: imageMap.googlePhotos,
              alt: "Google Photos API",
            },
            {
              href: "https://deepmind.google/technologies/gemini/",
              src: imageMap.googleGemini,
              alt: "Gemini AI",
            },
            {
              href: "https://nodejs.org/",
              src: imageMap.nodejs,
              alt: "Node.js",
            },
            {
              href: "https://www.typescriptlang.org/",
              src: imageMap.typescript,
              alt: "TypeScript",
            },
            {
              href: "https://expressjs.com/",
              src: imageMap.express,
              alt: "Express",
            },
            {
              href: "https://www.postgresql.org/",
              src: imageMap.postgresql,
              alt: "PostgreSQL",
            },
          ]}
        />

        <ExperienceCard
          delay={0.3}
          title="RSS — Inspect"
          logoText="Full Stack"
          bullets={[
            "Led a full rewrite of Inspect, a mobile and web compliance platform used by the California Department of Public Health and other government agencies",
            "Project awarded the University of California Office of the President STAR Award",
          ]}
          icons={[
            { href: "https://react.dev/", src: imageMap.react, alt: "React" },
            {
              href: "https://mui.com/",
              src: imageMap.materialui,
              alt: "Material UI",
            },
            {
              href: "https://tailwindcss.com/",
              src: imageMap.tailwind,
              alt: "Tailwind CSS",
            },
            {
              href: "https://nodejs.org/",
              src: imageMap.nodejs,
              alt: "Node.js",
            },
            {
              href: "https://expressjs.com/",
              src: imageMap.express,
              alt: "Express",
            },
            {
              href: "https://graphql.org/",
              src: imageMap.graphql,
              alt: "GraphQL",
            },
            {
              href: "https://www.mongodb.com/",
              src: imageMap.mongodb,
              alt: "MongoDB",
            },
            {
              href: "https://www.elastic.co/elasticsearch/",
              src: imageMap.elasticsearch,
              alt: "Elasticsearch",
            },
            {
              href: "https://kubernetes.io/",
              src: imageMap.kubernetes,
              alt: "Kubernetes",
            },
            {
              href: "https://kafka.apache.org/",
              src: imageMap.kafka,
              alt: "Kafka",
            },
            { href: "https://jestjs.io/", src: imageMap.jest, alt: "Jest" },
          ]}
        />

        <ExperienceCard
          delay={0.4}
          title="Personal Project — Nametag (prior to sunset)"
          logoText="Full Stack"
          bullets={[
            "Rails MVC application for efficient event attendance and contact information tracking for a nonprofit organization",
            "Implemented Google OAuth authentication for ease of use",
            "Used by 30+ unique users prior to sunset",
          ]}
          icons={[
            {
              href: "https://rubyonrails.org/",
              src: imageMap.ruby,
              alt: "Ruby on Rails",
            },
            {
              href: "https://jquery.com/",
              src: imageMap.jquery,
              alt: "jQuery",
            },
            {
              href: "https://getbootstrap.com/",
              src: imageMap.bootstrap,
              alt: "Bootstrap",
            },
            {
              href: "https://www.postgresql.org/",
              src: imageMap.postgresql,
              alt: "PostgreSQL",
            },
            {
              href: "https://www.heroku.com/",
              src: imageMap.heroku,
              alt: "Heroku",
            },
            {
              href: "https://developers.google.com/identity",
              src: imageMap.google,
              alt: "Google OAuth",
            },
          ]}
        />
      </div>
    </div>
  );
}
