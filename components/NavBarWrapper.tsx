"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

const NavBarWrapper = () => {
  const pathname = usePathname();
  const isComingSoon = pathname === "/coming-soon";

  if (isComingSoon) {
    return null;
  }

  return <NavBar />;
};

export default NavBarWrapper;
