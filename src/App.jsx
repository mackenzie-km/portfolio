import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import About from "./About.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <About />
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
