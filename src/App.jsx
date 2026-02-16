import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="w-full border-b border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-6 mt-4">
          <nav className="flex items-baseline justify-between">
            <div
              className="
          relative
          font-pacifico text-[42px]
          leading-[0.95]
          text-[var(--color-text-dark)]
          pb-6
        "
            >
              MKG
              <span
                className="
            absolute left-1/2
            bottom-0
            h-[4px] w-[150%]
            -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-[var(--color-accent-dark)]
            to-[var(--color-accent-med)]
          "
              />
            </div>
            <ul className="flex gap-16 font-[var(--font-nunito)] text-[18px] text-[var(--color-text-dark)]">
              <li key="home" className="relative">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `group relative font-medium pb-6 ${
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
                      `group relative font-medium pb-6 ${
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
                  className="group relative font-medium pb-6"
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
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#ddd4c9]">
        <p
          id="contact"
          class="px-[10%] py-[2%] font-pacifico text-sm text-center "
        >
          Made with care in 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}
