import Image from "next/image";
import React from "react";

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
    return <h2>Not Found page</h2>;
  }

  return (
    <div className="container mx-auto my-12">
      {/* Image */}
      <div className="relative w-full h-75 overflow-hidden rounded-xl bg-black">
        {/* Background Image */}
        <Image
          src={story.image}
          alt={story.title}
          aria-hidden="true"
          fill
          sizes="(max-width: 639px) 0px, 100vw"
          className="hidden sm:block object-cover blur-md scale-110 opacity-45"
        />

        {/* Main Image */}
        <Image
          src={story.image}
          alt={story.title}
          fill
          priority
          sizes="100vw"
          className="relative z-10 object-contain rounded-xl border border-gray-900"
        />
      </div>
      {/* Name */}
      <h2 className="my-7 font-oswald font-bold text-[22px] sm:text-[35px] text-red-600">
        {story.title}
      </h2>
      <p className="text-justify text-[14px] sm:text-[16px]">{story.content}</p>
    </div>
  );
};

export default StoryDetailsPage;
