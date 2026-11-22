"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const [imgError, setImgError] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সাইন আউট সফল হয়েছে!");
          router.push("/singin");
         
        },
      },
    });
  };

  // ইউজারের নামের প্রথম অক্ষর বের করা (নাম না থাকলে ইমেইলের প্রথম অক্ষর নেবে)
 const firstLetter = session?.user?.name?.[0]?.toUpperCase()

  return (
    <nav className="bg-black sticky top-0 z-50 py-3 px-4 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Image and Text */}
        <Link href={"/"}>
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
        </Link>

        {/* Conditional Rendering */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isPending ? (
            <div className="h-9 w-28 bg-white/10 animate-pulse rounded-[7px]" />
          ) : session?.user ? (
            <div className="dropdown dropdown-end">
              {/* ট্রিগার বাটন: সার্কেল এবং ইউজারের নাম */}
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer"
              >
                {session.user.image && !imgError ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name || "User"}
                    onError={() => setImgError(true)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-red-600"
                  />
                ) : (
                  <div
                    title={session.user.name}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-600/20 border border-red-600 flex items-center justify-center text-red-500 font-bold text-sm sm:text-base select-none"
                  >
                    {firstLetter}
                  </div>
                )}

                <span className="hidden sm:inline text-sm text-gray-200 font-medium">
                  {session.user.name}
                </span>
              </div>

              {/* ড্রপডাউন মেনু */}
              <ul
                tabIndex={-1}
                className="dropdown-content menu bg-[#11131a] border border-white/10 rounded-box z-50 mt-3 w-52 p-2 shadow-lg"
              >
                {/* ইউজারের ইমেইল */}
                <li className="px-3 py-1.5 text-xs text-gray-400 truncate border-b border-white/10 mb-1 pointer-events-none">
                  {session.user.email}
                </li>


                {/* Sign Out বাটন */}
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 hover:bg-red-600/10 w-full text-left cursor-pointer"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                href="/singin"
                className="px-2.5 py-1 sm:px-4 sm:py-1.75 rounded-[7px] text-white bg-black hover:bg-red-600 transition"
              >
                Sign In
              </Link>

              <Link
                href="/singup"
                className="px-2.5 py-1 sm:px-4 sm:py-1.75 rounded-[7px] text-white border-none bg-red-600 hover:bg-red-800 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
