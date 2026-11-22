import ErrorPage from "@/component/ErrorPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const StoryDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://raw.githubusercontent.com/alamin990-E/bangla-horror-api/main/details.json",
  );

  if (!res.ok) {
    throw new Error("Failed to Fetch");
  }

  const data = await res.json();
  const story = data.stories.find((item) => item.id === Number(id));

  if (!story) {
    return <ErrorPage></ErrorPage>;
  }

  return (
    <div className="container mx-auto my-12 px-4">
      {/* হোমে ফিরে যান বাটন */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-red-600/60 hover:text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.12)] transition-all duration-300 group"
        >
          <FaArrowLeft className="text-red-500 group-hover:-translate-x-1 transition-transform duration-300" />
          <span>হোমে ফিরে যান</span>
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-full h-75 overflow-hidden rounded-xl bg-black border border-gray-900 flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={story.image}
          alt={story.title}
          aria-hidden="true"
          fill
          sizes="(max-width: 639px) 0px, 100vw"
          className="hidden sm:block object-cover blur-md scale-110 opacity-45"
        />

        {/* Main Image Wrapper: এটি ছবির আসল প্রস্থ অনুযায়ী ফিট হবে */}
        <div className="relative z-10 h-full w-fit overflow-hidden rounded-xl">
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-auto object-contain scale-[1.03] block"
          />
        </div>
      </div>

      {/* Name */}
      <h2 className="my-7 font-oswald font-bold text-[22px] sm:text-[35px] text-red-600">
        {story.title}
      </h2>

      {/* Story Content */}
      <p className="whitespace-pre-line text-justify text-[14px] sm:text-[16px] leading-relaxed text-zinc-300">
        {story.content}
      </p>
    </div>
  );
};

export default StoryDetailsPage;
