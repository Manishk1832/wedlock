"use client";
import { useState } from "react";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import Link from "next/link";

const sections = [
  { title: "Community Guidelines", links: "/community-guidelines/" },
  { title: "About", links: "/about/" },
  { title: "TERMS", links: "/terms-conditions/" },
  { title: "PRIVACY", links: "/privacy-policy/" },
  { title: "COOKIES POLICY", links: "/cookies-policy/" },
];

interface activeSectionProps {
  activeSectionData: string | null;
}

const Nav: React.FC<activeSectionProps> = ({
  activeSectionData,
}: activeSectionProps) => {
  const [activeSection, setActiveSection] = useState<string | null>(
    `${activeSectionData}`
  );

  return (
    <div className="w-full md:w-72 p-4 bg-white shadow-md">
      {sections.map(({ title, links }) => (
        <div key={title} className="mt-4 cursor-pointer">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">
              <Link href={links}>{title}</Link>
            </h2>
          </div>
          <hr className="my-2 text-[#E6F2F7]" />
        </div>
      ))}
    </div>
  );
};

export default Nav;
