import Image from "next/image";
import HeroBanner from "../assets/Hero.jpg";

const Hero = () => {
  // সরাসরি সার্ভারে বাংলাদেশের বর্তমান বাংলা তারিখ তৈরি
  const banglaDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <section className="w-full mb-8">
      <div className="container mx-auto relative overflow-hidden">
        {/* ১. নিচের দিক থেকে কাটা ইমেজ */}
        <Image
          src={HeroBanner}
          alt="ভয়ের জগতে স্বাগতম"
          priority
          className="w-full h-65 sm:h-95 md:h-115 lg:h-130 object-cover object-top block"
        />

        {/* ২. টেক্সট ও বাটন */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-4">
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-2 sm:space-y-4 mb-4 sm:mb-16">
            {/* রিয়েল বাংলা তারিখ ব্যাজ */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/75 ">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-medium">
                {banglaDate}
              </span>
            </div>

            <h1 className="text-[18px] sm:text-[40px] font-bold leading-tight tracking-wide drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              <span className="text-white block">ভয়ের জগতে</span>
              <span className="font-oswald text-red-600">
                স্বাগতম...
              </span>
            </h1>

            <p className="text-zinc-100 text-xs sm:text-base md:text-lg font-medium leading-relaxed max-w-xs sm:max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              বাংলা ভাষায় ভয়ংকর ও রহস্যময় গল্পের এক অনন্য সংগ্রহ। নিঝুম রাতে
              সাহস থাকলে একা পড়ুন...
            </p>

            <div className="pt-1 sm:pt-2">
              <a
                href="#stories"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl shadow-[0_0_20px_rgba(220,38,38,0.7)] hover:shadow-[0_0_28px_rgba(220,38,38,0.95)] transition-all duration-300"
              >
                <span>গল্পগুলো দেখুন</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
