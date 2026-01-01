import { motion } from "motion/react";
import { imageMap } from "./constants/food-images";

function Card({ filename, hueA, hueB, name }) {
  const background = `linear-gradient(
  135deg,
  ${hue(hueA, 97)},
  ${hue(hueA, 85)} 45%,
  ${hue(hueB, 65)}
)`;

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
        <div class="font-pacifico text-[2em] text-center">{name}</div>
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

const hue = (h, l) => `hsl(${h}, 85%, ${l}%)`;

const cards = [
  ["cookie.png", 34, 24, "Cookies"],
  ["musubi.png", 25, 35, "Spam Musubi"],
  ["appie-pie.png", 45, 58, "Apple Pie"],
  ["karaage.png", 115, 135, "Karaage"],
  ["kabobs.png", 25, 45, "Beef Kabobs"],
  ["egg-tart.png", 45, 62, "Egg Tarts"],
  ["okonomiyaki.png", 25, 35, "Okonomiyaki"],
  ["tteokbokki.png", 5, 15, "Tteokbokki"],
  ["strawberry-cheesecake.png", 300, 315, "Strawberry Cheesecake"],
  ["jajangmyeon.png", 28, 38, "Jajangmyeon"],
];

export default function Cooking() {
  return (
    <div class="page-container">
      <p class="text-[1em] ">
        As cooking is my biggest hobby, I'm glad you're here!
      </p>
      <p class="text-[1em]  ">
        This page doesn't have any recipes, as I rarely create recipes. Rather,
        I love <i>mastering</i> recipes. I'm always thinking, "How can I make
        this for 80 people?" and "Can I make this in a crock pot?"
      </p>
      <p class="text-[1em] ">
        As many of my recipes have been taught to me by family, and the many
        international friends who have become family, these dishes are from all
        over the world. I hope you enjoy! Please reach out if you want to learn
        more about any of these dishes.
      </p>
      <div class="flex-column mx-auto mb-[50px] max-w-[500px] pb-[100px] w-full">
        {cards.map(([filename, hueA, hueB, name]) => (
          <Card
            filename={filename}
            hueA={hueA}
            hueB={hueB}
            key={name}
            name={name}
          />
        ))}
      </div>
      <div class="font-pacifico text-[3em] text-center">... and more!</div>
    </div>
  );
}
