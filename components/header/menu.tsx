"use client";

import {useState} from "react";

const menuItems = [
  {name: "Home", href: "/"},
  {name: "Laundry", href: "/manual/laundry"},
  {name: "Emergency", href: "/manual/emergency"},
  {name: "Rubbish", href: "/manual/rubbish"},
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="max-md:hidden">
        <ul className="flex gap-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="rounded-lg px-4 py-2 text-white transition hover:bg-white/20"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5"
        >
          <span
            className={`block h-0.5 w-8 bg-white transition ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-8 bg-white transition ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-8 bg-white transition ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition ${isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 overflow-hidden
    bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
    text-white shadow-2xl backdrop-blur-xl
    transition-transform duration-300
    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="border-b border-white/10 p-6">
          <h2 className="text-2xl font-bold tracking-wide">
            Menu
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Navigation
          </p>
        </div>

        <ul className="flex flex-col gap-2 p-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
            group flex items-center rounded-xl
            px-4 py-3
            transition-all duration-200
            hover:bg-white/10
            hover:translate-x-2
          "
              >
                <span
                  className="
              mr-3 h-2 w-2 rounded-full
              bg-cyan-400
              opacity-0 transition
              group-hover:opacity-100
            "
                />
                <span className="font-medium">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
