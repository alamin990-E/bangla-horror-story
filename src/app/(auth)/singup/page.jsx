"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPass, setShowpass] = useState(false);
  const [loading, setLoading] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    try {
      if (
        !user.name.trim() ||
        !user.email.trim() ||
        !user.password.trim() ||
        !user.confirmPassword.trim()
      ) {
        return toast.error("সবগুলো ঘর পূরণ করুন!");
      }
      if (user.password.trim().length < 8) {
        return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!");
      }
      if (user.password !== user.confirmPassword) {
        return toast.error("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না!");
      }

      setLoading(true);

      const { data, error } = await authClient.signUp.email({
        ...user,
        callbackURL: "/singin",
      });

      if (error) {
        return toast.error(
          error.message.includes("already")
            ? "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট তৈরি করা হয়েছে। সাইন ইন করুন!"
            : "সাইন আপ করতে সমস্যা হয়েছে!",
        );
      }
      if (data) {
        toast.success("সাইন আপ সফল হয়েছে! এখন সাইন ইন করুন।");
        router.push("/singin");
      }
    } catch (error) {
      toast.error("কিছু একটা সমস্যা হয়েছে!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
    if (error) {
      toast.error("Google দিয়ে লগইন করতে সমস্যা হয়েছে!");
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-10">
      {/* Signup Card */}
      <div className="w-full max-w-120">
        <div className="bg-[#11131a] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-2xl">
          {/* Title */}
          <div className="text-center mb-7">
            <h1 className="text-[18px] sm:text-2xl font-bold mb-2 sm:mb-3">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="text-xs sm:text-sm text-gray-400">
              নতুন অ্যাকাউন্ট তৈরি করতে নিচের তথ্যগুলো পূরণ করুন।
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={onSubmit} className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2">
                নাম
              </label>

              <input
                type="text"
                name="name"
                placeholder="আপনার নাম লিখুন"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#1a1c25] border border-white/10 outline-none focus:border-red-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2">
                ইমেইল
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#1a1c25] border border-white/10 outline-none focus:border-red-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg bg-[#1a1c25] border border-white/10 outline-none focus:border-red-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowpass(!showPass)}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-gray-400 hover:text-white"
                >
                  {showPass ? (
                    <IoIosEyeOff className="text-red-500" size={20} />
                  ) : (
                    <IoIosEye className="text-red-500" size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-16 rounded-lg bg-[#1a1c25] border border-white/10 outline-none focus:border-red-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs text-gray-400 hover:text-white"
                >
                  {showConfirmPassword ? (
                    <IoIosEyeOff className="text-red-500" size={20} />
                  ) : (
                    <IoIosEye className="text-red-500" size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base rounded-lg cursor-pointer bg-red-600 hover:bg-red-700 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "অ্যাকাউন্ট তৈরি করুন"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 sm:gap-4 my-5 sm:my-6">
            <div className="h-px flex-1 bg-white/10"></div>
            <span className="text-xs sm:text-sm text-gray-500">অথবা</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          {/* Google Signup UI */}
          <button
            type="button"
            onClick={handleGoogle}
            className="w-full py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg bg-red-700 hover:bg-red-900 cursor-pointer text-white font-medium transition flex items-center justify-center gap-2 sm:gap-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.74 7.18l7.72 6C44.42 37.88 46.98 31.73 46.98 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.72-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Google দিয়ে সাইন আপ করুন
          </button>

          {/* Login Section */}
          <div className="text-center mt-5 sm:mt-7">
            <p className="text-xs sm:text-sm text-gray-400">
              ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
              <Link
                href="/singin"
                className="text-red-400 hover:text-red-300 font-medium"
              >
                সাইন ইন করুন
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4 sm:mt-6">
          <Link
            href="/"
            className="text-xs sm:text-sm text-gray-400 hover:text-white transition"
          >
            ← হোমে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
