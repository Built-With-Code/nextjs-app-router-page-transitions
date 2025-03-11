"use client";

import Link from "next/link";

const Nav = () => {
  const routes = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
  ];

  return (
    <nav className="p-6">
      <ul className="flex gap-4">
        {routes.map((route) => (
          <li key={route.label}>
            <Link href={route.url}>{route.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
