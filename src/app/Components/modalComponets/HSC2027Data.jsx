"use client";

import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "HSC 2৭ শেষ মুহূর্তের প্রস্তুতি",
    subtitle: "ফিজিক্স চূড়ান্ত Bundle",
    classes: "৩৩টি লাইভ ক্লাস",
    image: "/assets/img1.jfif",
  },
  {
    id: 2,
    title: "HSC 2৭ শেষ মুহূর্তের প্রস্তুতি",
    subtitle: "রসায়ন চূড়ান্ত কোর্স",
    classes: "৩০টি লাইভ ক্লাস",
    image: "/assets/img2.jpg",
  },
  {
    id: 3,
    title: "HSC 2৭ শেষ মুহূর্তের প্রস্তুতি",
    subtitle: "গণিত চূড়ান্ত কোর্স",
    classes: "২৮টি লাইভ ক্লাস",
    image: "/assets/img3.jpg",
  },
  {
    id: 4,
    title: "HSC 2৭ শেষ মুহূর্তের প্রস্তুতি",
    subtitle: "বাংলা, ইংরেজি, ICT",
    classes: "২৫টি লাইভ ক্লাস",
    image: "/assets/img4.jfif",
  },
];

export default function HSC27Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-[95%] max-w-6xl rounded-2xl bg-[#FFD6D6] p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 text-black top-4 text-xl font-bold cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="mb-6 text-center text-2xl text-black font-bold">
          এইচএসসি ২৭
        </h2>

        {/* Cards */}
        <div className="flex gap-5 overflow-x-auto pb-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="min-w-[260px] rounded-xl bg-white shadow-md"
            >
              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="rounded-t-xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-black">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  {course.subtitle}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {course.classes}
                </p>

                <button className="mt-3 text-sm font-semibold text-green-600">
                  বিস্তারিত →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
