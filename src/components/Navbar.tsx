import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex bg-white justify-between items-center px-[5rem] py-[1rem]">
      <div className="flex items-center gap-4">
        <Image src="/favicon.png" alt="logo" width={100} height={100} />
        <p className="font-400 text-[2rem]">IMTAHAN.DEV</p>
      </div>
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
