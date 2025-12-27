import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="about" class="flex flex-col items-center gap-8 md:flex-row">
        <div class="flex-2 order-2 md:order-1">
          <p>Hi! I’m Mackenzie (but you can call me Mack).</p>
          <p>
            I’m a software engineer who believes great software starts with
            understanding people.
          </p>
          <p>
            I started out in Animal Science at UC Davis and spent several years
            working in biotech. While there, I began automating my own work with
            Excel and SQL—and saw firsthand how software can save time, reduce
            friction, and make day-to-day work more enjoyable. That curiosity
            led me back to school in 2019 to study software engineering, and
            I’ve been working as an engineer since 2020.
          </p>
          <p>
            For me, the who always comes before the what. I care deeply about my
            teammates and the people we’re building for. Tech stacks, tools, and
            coding preferences matter, but what I really get excited about is
            solving real problems that actually help others. This same mindset
            is why I also spend time outside of work mentoring international
            students.
          </p>
          <p>Feel free to explore my projects, writing, and more about me.</p>
          <p>Let’s build something together!</p>
        </div>
        <div class="flex-1 order-1 md:order-2">
          <img
            class="min-w-full min-h-[200px] md:min-h-full"
            id="profile-photo"
            src={viteLogo}
            alt="Profile Photo"
          />
        </div>
      </div>
      <div id="projects">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold underline">Vite + React</h1>
      <div id="cooking">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="contact">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
