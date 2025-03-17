"use client";

import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav className="w-full  flex justify-center py-5">
      <div className="w-7xl px-5">
        <NavLink label="Home" href={`/`} />
        <NavLink label="Recipes" href={`/recipes`} />
      </div>
    </nav>
  );
};

export default NavBar;
