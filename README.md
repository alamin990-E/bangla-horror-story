# 👻 Bangla Horror Story

**Bangla Horror Story** হলো বাংলা ভাষায় ভৌতিক, রহস্যময় ও অলৌকিক গল্প পড়ার একটি আধুনিক ওয়েব অ্যাপ্লিকেশন। ডার্ক এবং হরর-থিমযুক্ত ইন্টারফেসের সাথে এখানে পাঠকরা সহজেই অ্যাকাউন্ট তৈরি করে বিভিন্ন ক্যাটাগরির গল্প উপভোগ করতে পারবেন।

---

## ✨ প্রধান ফিচারসমূহ (Key Features)

- **🔐 সম্পূর্ণ অথেনটিকেশন সিস্টেম (Better Auth):**
  - ইমেইল ও পাসওয়ার্ডের মাধ্যমে নিরাপদ Sign Up এবং Sign In সুবিধা।
  - **Google OAuth 2.0** ইন্টিগ্রেশন—এক ক্লিকেই Google অ্যাকাউন্ট দিয়ে লগইন/সাইন-আপ করার সুবিধা।
  - Navbar-এ কন্ডিশনাল রেন্ডারিং ও DaisyUI ভিত্তিক কাস্টম প্রোফাইল ড্রপডাউন মেনু।
- **🛡️ রাউট প্রোটেকশন (`proxy.js`):**
  - Next.js 16-এর `proxy.js` এবং Better Auth সেশন কুকি ব্যবহার করে প্রোটেক্টেড পেজগুলোতে অননুমোদিত প্রবেশ নিয়ন্ত্রণ।
- **📖 ডাইনামিক গল্প ও ডিটেইলস পেজ:**
  - কাস্টম JSON API থেকে গল্প ফেচ করে রেসপন্সিভ স্টোরি কার্ডে প্রদর্শন।
  - প্রতিটি গল্পের জন্য আলাদা ডাইনামিক ডিটেইলস পেজ (`/story/[id]`)।
- **🌑 হরর-থিমযুক্ত ৪০৪ পেজ ও রেসপন্সিভ ডিজাইন:**
  - ভুল রাউট বা অপ্রাপ্য গল্পের জন্য কাস্টম অ্যানিমেটেড **৪০৪ (Not Found)** পেজ।
  - মোবাইল থেকে শুরু করে বড় ডেস্কটপ স্ক্রিনের জন্য সম্পূর্ণ রেসপন্সিভ Dark UI এবং বাংলা ফন্ট (`Hind Siliguri`) সাপোর্ট।

---

## 🛠️ ব্যবহৃত প্রযুক্তিসমূহ (Tech Stack)

- **Framework:** [Next.js 16.4.6](https://nextjs.org/) (App Router & Turbopack)
- **Language:** JavaScript (ES6+)
- **Authentication:** [Better Auth](https://www.better-auth.com/) (Email/Password & Google OAuth)
- **Database:** [MongoDB](https://www.mongodb.com/) (MongoDB Atlas)
- **Styling & UI:** [Tailwind CSS](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Icons & Notifications:** Lucide React, React Icons, React Hot Toast
- **Data Source:** GitHub-hosted JSON API (`bangla-horror-api`)

---

## 📁 প্রজেক্ট স্ট্রাকচার (Project Structure)

```text
bangla-horror-story/
├── src/
│   ├── app/
│   │   ├── api/auth/[...all]/   # Better Auth API রাউট হ্যান্ডলার
│   │   ├── singin/              # সাইন-ইন পেজ
│   │   ├── signup/              # সাইন-আপ পেজ
│   │   ├── story/[id]/          # ডাইনামিক গল্প ডিটেইলস পেজ
│   │   ├── layout.js            # গ্লোবাল লেআউট (Navbar, Footer, Toaster)
│   │   ├── page.js              # হোমপেজ
│   │   └── not-found.jsx        # কাস্টম ৪০৪ এরর পেজ
│   ├── components/              # Navbar, Footer, StoryCard ইত্যাদি কম্পোনেন্ট
│   ├── lib/
│   │   ├── auth.js              # Better Auth সার্ভার কনফিগারেশন
│   │   └── auth-client.js       # Better Auth ক্লায়েন্ট কনফিগারেশন
│   └── proxy.js                 # রাউট প্রোটেকশন মিডলওয়্যার/প্রক্সি
├── .env                         # এনভায়রনমেন্ট ভ্যারিয়েবলসমূহ
└── package.json