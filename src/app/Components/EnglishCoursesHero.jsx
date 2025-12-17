import React from "react";

export default function EnglishCoursesHero() {
  const courses = [
    {
      title: "IELTS Course by Munzereen Shahid",
      author: "Munzereen Shahid",
      
      img: '/assets/img1.jfif'
    },
    {
      title: "ঘরে বসে Spoken English",
      author: "Munzereen Shahid",
      img: '/assets/img2.jpg'
    },
    {
      title: "IELTS LIVE Batch",
      author: "Uttam Deb +4",
      img: '/assets/img3.jpg',
      live: true,
    },
    {
      title: "Complete English Grammar Course",
      author: "Munzereen Shahid",
      img: '/assets/img4.jfif'
    },
    {
      title: "English Communication for Professionals",
      author: "Munzereen Shahid",
      img: '/assets/img5.jfif'
    },
    {
      title: "IELTS Reading & Listening Mock Tests",
      author: "20 Mock Test",
      img: '/assets/img6.jpg'
    },
  ];

  return (
    <section className="relative w-full bg-black py-20 px-4">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[90%] h-[90%] rounded-3xl bg-gradient-to-br from-emerald-900/40 via-black to-lime-900/30 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto bg-gradient-to-br from-neutral-900 to-black rounded-3xl p-10 shadow-2xl">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-lime-200 bg-clip-text text-transparent">
          ঘরে বসে অনলাইনে ইংরেজি শেখা চলুক নিরবচ্ছিন্ন
        </h1>
        <p className="text-center text-sm md:text-base text-neutral-400 mt-3">
          শেখার সেরা সুযোগ অনলাইন ও অফলাইন দুটোই
        </p>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group flex items-center justify-between rounded-xl bg-neutral-800/60 hover:bg-neutral-700/70 transition p-4 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Thumbnail placeholder */}
                <div >
                  <img src={course.img} alt="" className="h-14 w-20 rounded-lg flex items-center justify-center text-black font-bold" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs text-neutral-400">{course.author}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {course.live && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-600 text-white">
                    LIVE
                  </span>
                )}
                <span className="text-neutral-400 group-hover:text-white transition">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 transition">
            এক্সপ্লোর করুন →
          </button>
        </div>
      </div>
    </section>
  );
}
