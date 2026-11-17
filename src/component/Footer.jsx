import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-4 mt-10 border-t border-gray-500">
      <div className="container mx-auto flex flex-col gap-2 md:flex-row items-center sm:justify-between ">
        <p className="text-[14px] sm:text-[16px]">
          © {new Date().getFullYear()} বাংলা Horror Story. All rights reserved.
        </p>

        <p className="text-zinc-300 italic text-[14px] sm:text-[16px]">
          Feel the fear, stay with the{" "}
          <span className="text-red-500">mystery...</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;