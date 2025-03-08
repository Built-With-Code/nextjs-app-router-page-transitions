"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const Nav = () => {
  const router = useTransitionRouter();

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          scale: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.5,
          scale: 0.9,
          transform: "translateY(-100px)",
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          transform: "translateY(100%)",
        },
        {
          transform: "translateY(0)",
        },
      ],
      {
        duration: 1000,
        easing: "cubic-bezier(0.76, 0, 0.24, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

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
            <Link
              href={route.url}
              onClick={(e) => {
                e.preventDefault();
                router.push(route.url, {
                  onTransitionReady: slideInOut,
                });
              }}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
