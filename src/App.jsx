import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Coding", to: "/coding" },
  { label: "Mentorship", to: "/mentorship" },
  { label: "Cooking", to: "/cooking" },
  {
    label: "Blog",
    to: "https://medium.com/@mackenzie.gonzales.k_98971",
    external: true,
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-neutral-200">
        <div className="max-w-[1100px] mx-auto px-6 mt-4">
          <nav className="flex items-baseline justify-between">
            {/* Logo */}
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

            {/* Desktop nav */}
            <ul className="hidden md:flex gap-16 font-[var(--font-nunito)] text-[18px] text-[var(--color-text-dark)]">
              {NAV_ITEMS.map(({ label, to, external }) => (
                <li key={label} className="relative">
                  <NavLink
                    to={to}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={({ isActive }) =>
                      `group relative font-medium pb-6 ${
                        isActive ? "active text-[var(--color-text-dark)]" : ""
                      }`
                    }
                  >
                    {label}
                    <span className="nav-link" />
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Hamburger button — mobile only */}
            <button
              className="md:hidden mb-4 p-2 text-[var(--color-text-dark)] focus:outline-none"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </nav>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <ul className="flex flex-col font-[var(--font-nunito)] text-[18px] text-[var(--color-text-dark)]">
              {NAV_ITEMS.map(({ label, to, external }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={({ isActive }) =>
                      `block px-6 py-4 font-medium border-b border-neutral-100 ${
                        isActive
                          ? "text-[var(--color-accent-dark)]"
                          : "text-[var(--color-text-dark)]"
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-[#ddd4c9]">
        <p
          id="contact"
          className="px-[10%] py-[2%] font-pacifico text-sm text-center"
        >
          Made with care in 2025. All rights reserved.
        </p>
      </footer>
    </>
  );
}
