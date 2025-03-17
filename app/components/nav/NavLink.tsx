"use client";

import { useRouter } from "next/navigation";

const NavLink = ({ label, href }: { label: string; href: string }) => {
  const router = useRouter();

  return (
    <span
      className="hover:border-black border-b-2 border-transparent mx-5 text-2xl font-semibold"
      onClick={() => router.push(href)}
    >
      {label}
    </span>
  );
};

export default NavLink;
