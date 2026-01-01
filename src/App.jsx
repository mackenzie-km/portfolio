import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header>
        <nav className="mx-auto mt-4 mb-8 flex max-w-[1100px] items-baseline gap-16 px-8">
          <div
            className="
        relative
        font-pacifico text-[42px]
        leading-[0.95]
        text-[var(--color-text-dark)]
      "
          >
            MKG
            <span
              className="
          absolute left-1/2
          bottom-[-22px]   
          h-[4px] w-[150%]
          -translate-x-1/2
          rounded-full
          bg-gradient-to-r
          from-[var(--color-accent-dark)]
          to-[var(--color-accent-med)]
          opacity-100
        "
            />
          </div>
          <ul className="flex gap-16 font-[var(--font-nunito)] text-[18px] text-[var(--color-text-dark)]">
            <li key="home" className="relative">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `group relative font-medium ${
                    isActive ? "active text-[var(--color-text-dark)]" : ""
                  }`
                }
              >
                Home
                <span
                  className="
        nav-link
      "
                />
              </NavLink>
            </li>
            {["Coding", "Mentorship", "Cooking"].map((item) => (
              <li key={item} className="relative">
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `group relative font-medium ${
                      isActive ? "active text-[var(--color-text-dark)]" : ""
                    }`
                  }
                >
                  {item}

                  <span
                    className="
        nav-link
      "
                  />
                </NavLink>
              </li>
            ))}
            <li key="home" className="relative">
              <NavLink
                to="https://medium.com/@mackenzie.gonzales.k_98971"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
                <span
                  className="
        nav-link
      "
                />
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p
          id="contact"
          class="mx-[10%] my-[2%] font-pacifico text-sm text-center"
        >
          Made with care in 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}
