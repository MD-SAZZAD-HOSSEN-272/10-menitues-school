"use client";

import { useState } from "react";
import HSC26Modal from "./modalComponets/HSC2026Data";
import HSC27Modal from "./modalComponets/HSC2027Data";

const programs = [
  {
    title: "HSC 26",
    subtitle: "HSC ২৬",
    gradient: "from-sky-400 to-blue-600",
    emoji: "🏆",
  },
  {
    title: "HSC 27",
    subtitle: "HSC ২৭",
    gradient: "from-sky-400 to-blue-600",
    emoji: "🎯",
  },
  {
    title: "SSC 26",
    subtitle: "SSC ২৬",
    gradient: "from-orange-400 to-orange-600",
    emoji: "🎒",
  },
  {
    title: "SSC 27",
    subtitle: "দশম শ্রেণি",
    gradient: "from-orange-400 to-orange-600",
    emoji: "📘",
    badge: "২০২৫ সালে ভর্তি চলছে",
  },
  {
    title: "CLASS 9",
    subtitle: "নবম শ্রেণি",
    gradient: "from-green-400 to-green-600",
    emoji: "📚",
    badge: "২০২৫ সালে ভর্তি চলছে",
  },
  {
    title: "CLASS 6,7,8",
    subtitle: "৬ষ্ঠ, ৭ম, ৮ম শ্রেণি",
    gradient: "from-green-400 to-green-600",
    emoji: "🎒",
    badge: "২০২৫ সালে ভর্তি চলছে",
  },
];

export default function StudyPrograms() {
  const [modalOpen, setModalOpen] = useState(false);
  const [courseYear, setCourseYear] = useState(null)

  const handleModal = (index) => {
    setModalOpen(true);
    setCourseYear(index);
  };

  const handleModalClose = () => {
    setModalOpen(false)
  }
  console.log(modalOpen);

  return (
    <div className="relative">
      <section className="relative bg-black py-20 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            শেখা হোক <span className="text-orange-400">আনন্দে!</span>
          </h1>
          <p className="mt-3 text-gray-300">
            এক জায়গায় স্কুল ও কলেজের সম্পূর্ণ প্রস্তুতি!
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {programs.map((item, index) => (
            <div
              onClick={() => handleModal(index)}
              key={index}
              className="bg-zinc-900 cursor-pointer border border-zinc-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`h-32 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-center text-sm text-gray-200">
                {item.subtitle}
              </p>

              {item.badge && (
                <div className="mt-3 flex justify-center">
                  <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
            ফ্রি ক্লাস বুক করুন →
          </button>
        </div>
      </section>
      <section className="relative bg-black py-20 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            শেখা হোক <span className="text-orange-400">আনন্দে!</span>
          </h1>
          <p className="mt-3 text-gray-300">
            এক জায়গায় স্কুল ও কলেজের সম্পূর্ণ প্রস্তুতি!
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 cursor-pointer border border-zinc-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`h-32 rounded-xl flex flex-col items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <span className="text-3xl">{item.emoji}</span>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-3 text-center text-sm text-gray-200">
                {item.subtitle}
              </p>

              {item.badge && (
                <div className="mt-3 flex justify-center">
                  <span className="text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
            ফ্রি ক্লাস বুক করুন →
          </button>
        </div>
      </section>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      {modalOpen ? (
        <div className=" w-[50%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl">
          {courseYear == 0 ? <HSC26Modal onClose={() => handleModalClose()}></HSC26Modal> : ''}
          {courseYear > 0 ? <HSC27Modal onClose={() => handleModalClose()}></HSC27Modal> : ''}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
