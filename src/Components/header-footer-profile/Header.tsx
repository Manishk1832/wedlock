import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-10 h-20 w-full bg-[#007EAF]">
      <div className="flex h-full items-center justify-between px-4 md:px-10 lg:px-20">
        <div className="">
          <Link href="/">
          <Image
            src="/logoau.png"
            width={150}
            height={150}
            alt="logo"
            className="h-auto w-24 md:w-36 lg:w-40"
          />
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-8 md:w-8">
            <button>
              <Image
                src="/profile.png"
                width={40}
                height={40}
                alt="profile"
                className="h-4 w-4 md:h-8 md:w-8"
              />
            </button>
          </div>
          <div className="">
            <button>
              <Image
                src="/Aus.svg"
                width={30}
                height={30}
                alt="lang"
                className="h-5 w-5 md:h-8 md:w-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
