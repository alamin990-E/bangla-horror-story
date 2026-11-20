import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const BookCard = ({ books }) => {
  return (
    <div id="stories" className="my-12">
      {/* কার্ডগুলোর উপরের টাইটেল */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-center gap-2 pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white tracking-wide">
            ভৌতিক{" "}
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.6)]">
              গল্পসমূহ
            </span>
          </h2>
          <p className="text-white text-center text-xs sm:text-sm mt-1">
            রাতের নিস্তব্ধতায় রোমাঞ্চকর ও ভয়ংকর সব গল্পের সংগ্রহ
          </p>
        </div>
      </div>

      {/* আপনার কার্ড গ্রিড */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books?.map((book) => (
          <div
            key={book.id}
            className="card flex flex-col w-full bg-zinc-950 border border-zinc-800/80 shadow-[0_0_20px_rgba(220,38,38,0.12)] hover:border-red-600/60 transition-all duration-300 overflow-hidden group"
          >
            {/* ইমেজ কন্টেইনার: scale-[1.02] সাদা দাগ ঢেকে দেবে */}
            <figure className="w-full overflow-hidden bg-black">
              <Image
                src={book.image}
                alt={book.title}
                width={800}
                height={450}
                className="w-full h-auto object-contain scale-[1.02] group-hover:scale-[1.07] transition-transform duration-500"
              />
            </figure>

            <div className="card-body flex flex-col flex-1 p-5">
              <div className="flex justify-between items-center gap-2">
                {/* বামপাশের ক্যাটাগরি ব্যাজ */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-red-950/70 text-red-400 border border-red-800/60 shadow-[0_0_10px_rgba(220,38,38,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  ভৌতিক গল্প
                </span>

                {/* ডানপাশের লেখকের ব্যাজ ও আইকন */}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-zinc-900/90 border border-zinc-800 text-zinc-400">
                  <FaUser className="text-red-500 text-[10px]" />
                  <span>লেখক :</span>
                  <span className="text-zinc-200 font-medium">
                    {book.author}
                  </span>
                </span>
              </div>

              {/* গল্পের শিরোনাম */}
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-500 transition-colors mt-1">
                {book.title}
              </h2>

              <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 mt-1 leading-relaxed">
                {book.description}
              </p>

              {/* বাটন সবসময় কার্ডের একদম নিচে সমান লাইনে থাকবে */}
              <div className="mt-auto pt-5">
                <Link
                  href={`/story/${book.id}`}
                  className="btn btn-block cursor-pointer bg-red-600 hover:bg-red-700 text-white border-none rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                >
                  গল্পটি পড়ুন →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;