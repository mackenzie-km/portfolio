import reactLogo from "./assets/react.svg";
import "./App.css";
import About from "./About.jsx";
import Cooking from "./Cooking.jsx";

function App() {
  return (
    <>
      {/* <About /> */}
      <Cooking />
      <div id="projects">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold underline">Vite + React</h1>
      <p className="contact">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
