// App.jsx
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/coding">Coding</NavLink>
          <NavLink to="/mentorship">Mentorship</NavLink>
          <NavLink to="/cooking">Cooking</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p className="contact">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  );
}
