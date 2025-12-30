import { motion } from "motion/react";
import cookie from "./assets/cookie.png";
import musubi from "./assets/musubi.png";
import applePie from "./assets/apple-pie.png";
import karaage from "./assets/karaage.png";
import kabobs from "./assets/kabobs.png";
import eggTart from "./assets/egg-tart.png";
import okonomiyaki from "./assets/okonomiyaki.png";
import tteokbokki from "./assets/tteokbokki.png";
import strawberryCheesecake from "./assets/strawberry-cheesecake.png";
import jajangmyeon from "./assets/jajangmyeon.png";

const imageMap = {
  "cookie.png": cookie,
  "musubi.png": musubi,
  "appie-pie.png": applePie,
  "karaage.png": karaage,
  "kabobs.png": kabobs,
  "egg-tart.png": eggTart,
  "okonomiyaki.png": okonomiyaki,
  "tteokbokki.png": tteokbokki,
  "strawberry-cheesecake.png": strawberryCheesecake,
  "jajangmyeon.png": jajangmyeon,
};

function Card({ filename, hueA, hueB, name }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      class="relative flex items-center justify-center pt-[20px]  mb-[-40px] md:pb-[40px] md:pb-[100px] md:mb-[-120px]"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div
        style={{ background }}
        class="absolute inset-0 [clip-path:path('M_0_303.5_C_0_292.454_8.995_285.101_20_283.5_L_460_219.5_C_470.085_218.033_480_228.454_480_239.5_L_500_430_C_500_441.046_491.046_450_480_450_L_20_450_C_8.954_450_0_441.046_0_430_Z')]"
      />
      <motion.div
        class="flex flex-col items-center justify-center w-[300px] h-[430px] rounded-[20px] bg-[#f5f5f5] [transform-origin:10%_60%] shadow-[0_0_1px_hsl(0_0%_0%_/_0.075),_0_0_2px_hsl(0_0%_0%_/_0.075),_0_0_4px_hsl(0_0%_0%_/_0.075),_0_0_8px_hsl(0_0%_0%_/_0.075),_0_0_16px_hsl(0_0%_0%_/_0.075)]"
        variants={cardVariants}
      >
        <img
          key={name}
          src={imageMap[filename]}
          alt={name}
          className="h-[16em] w-auto object-contain"
        />
        <div class="[font-family:'Pacifico',cursive] text-[2em] ">{name}</div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: window.innerWidth < 768 ? 50 : 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 80%)`;

const cards = [
  ["cookie.png", 34, 20, "Cookies"],
  ["musubi.png", 25, 35, "Spam Musubi"],
  ["appie-pie.png", 45, 55, "Apple Pie"],
  ["karaage.png", 115, 135, "Karaage"],
  ["kabobs.png", 25, 45, "Beef Kabobs"],
  ["egg-tart.png", 45, 60, "Egg Tarts"],
  ["okonomiyaki.png", 25, 35, "Okonomiyaki"],
  ["tteokbokki.png", 0, 10, "Tteokbokki"],
  ["strawberry-cheesecake.png", 300, 315, "Strawberry Cheesecake"],
  ["jajangmyeon.png", 30, 35, "Jajangmyeon"],
];

export default function Cooking() {
  return (
    <div id="cooking" class="flex text-center">
      <div class="flex-column mx-auto my-[50px] max-w-[500px] pb-[100px] w-full">
        <p class="pb-4 text-[1em] ">
          As cooking is my biggest hobby, I'm glad you're here!
        </p>
        <p class="pt-4 pb-4 text-[1em]  ">
          This page doesn't have any recipes, as I rarely create recipes.
          Rather, I love <i>mastering</i> recipes. I'm always thinking, "How can
          I make this for 80 people?" and "Can I make this in a crock pot?"
        </p>
        <p class="pb-8 text-[1em] ">
          As many of my recipes have been taught to me by family, and the many
          international friends who have become family, these dishes are from
          all over the world. I hope you enjoy! Please reach out if you want to
          learn more about any of these dishes.
        </p>
        {cards.map(([filename, hueA, hueB, name]) => (
          <Card
            filename={filename}
            hueA={hueA}
            hueB={hueB}
            key={name}
            name={name}
          />
        ))}
        <div class="mt-[12rem]  [font-family:'Pacifico',cursive] text-[3em]">
          ... and more!
        </div>
      </div>
    </div>
  );
}
