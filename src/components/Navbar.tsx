import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-white justify-between items-center px-[5rem] py-[1rem]">
      <Link href="/">
        <div className="flex items-center gap-4">
          <Image
            src="/favicon.png"
            alt="logo"
            width={80}
            height={80}
            className="w-[4rem] h-[2.1rem]"
          />
          <p className="font-400 text-[1.5rem]">IMTAHAN.DEV</p>
        </div>
      </Link>
      <Image
        src="/icons/profile.svg"
        alt="logo"
        width={30}
        height={30}
        className="w-[3rem] h-[3rem]"
      />
    </div>
  );
};

export default Navbar;
