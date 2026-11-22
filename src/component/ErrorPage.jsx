import React from "react";
import Link from "next/link";
import { Ghost, Home, BookOpen } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#08090d] text-white flex flex-col items-center justify-center px-3 sm:px-4 py-8 sm:py-12 relative overflow-hidden">
      {/* পেছনের হালকা লাল ভৌতিক আভা (Ambient Glow) */}
      <div className="absolute w-64 h-64 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg text-center bg-[#11131a] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-10 shadow-2xl">
        {/* ভৌতিক আইকন */}
        <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-5 rounded-full bg-red-600/10 border border-red-500/20 flex items-center justify-center animate-bounce">
          <Ghost className="w-7 h-7 sm:w-10 sm:h-10 text-red-500" />
        </div>

        {/* 404 টেক্সট */}
        <h1 className="text-5xl sm:text-8xl font-extrabold tracking-wider sm:tracking-widest text-transparent bg-clip-text bg-linear-to-b from-red-500 to-red-900 mb-2 sm:mb-3 select-none">
          ৪০৪
        </h1>

        {/* হরর টাইটেল */}
        <h2 className="text-[15px] sm:text-2xl font-bold text-gray-100 leading-snug mb-2.5 sm:mb-3">
          আপনি ভুল অন্ধকারে পা দিয়েছেন!
        </h2>

        {/* সাবটাইটেল */}
        <p className="text-[12px] sm:text-sm text-gray-400 leading-relaxed mb-6 sm:mb-8 px-1 sm:px-0">
          আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি হয়তো অশরীরী কোনো ছায়ায় হারিয়ে গেছে,
          অথবা এই নামে কোনো গল্পের অস্তিত্বই নেই।
        </p>

        {/* বাটন গ্রুপ */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
          >
            <Home className="w-4 h-4 shrink-0" />
            হোমে ফিরে যান
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#1a1c25] hover:bg-[#232631] border border-white/10 text-gray-200 text-xs sm:text-sm font-medium transition flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-red-400 shrink-0" />
            সব গল্প পড়ুন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
