import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Loago Image and Text  */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src={Logo}
            alt="বাংলা Horror Story লোগো"
            width={50}
            height={50}
            className="object-contain h-13 w-13"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-white font-semibold text-[13px] sm:text-[16px] tracking-wide">
              বাংলা
            </h2>
            <h2 className="text-red-600 font-oswald font-bold text-[13px] sm:text-[16px] tracking-wider drop-shadow-[0_0_6px_rgba(220,38,38,0.5)]">
              Horror Story
            </h2>
          </div>
        </div>
        {/* Sing In and SingUp button */}
        <div className="flex items-center gap-2">
          <Link href="/signup" className="px-2.5 py-1 sm:px-4 sm:py-1.75 rounded-[7px] text-white bg-black hover:bg-red-600">
            Sign In
          </Link>

          <Link href="/login" className="px-2.5 py-1 sm:px-4 sm:py-1.75 rounded-[7px] text-white border-none bg-red-600 hover:bg-red-800">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
