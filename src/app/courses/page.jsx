"use client";
import { useState } from "react";




const instructors = [
  {
    name: "Md Kamrul Hasan Shovon",
    institute: "DU",
    img: "/instructors/shovon.png",
  },
  {
    name: "Aman Islam Siam",
    institute: "BUET",
    img: "/instructors/siam.png",
  },
  {
    name: "Sabbir Ahmed Rifat",
    institute: "RUET",
    img: "/instructors/rifat.png",
  },
  {
    name: "Mehdi Mohammed",
    institute: "Shaheed Suhrawardy Medical College",
    img: "/instructors/mehdi.png",
  },
];

export default function CourseBundle() {

    const thumbs = [
  "/assets/img1.jfif",
  "/assets/img2.jpg",
  "/assets/img3.jpg",
  "/assets/img4.jfif",
];

    const [images, setImages] = useState('/assets/img4.jfif')

    const handleImages = (img) => {
        setImages('')
        setImages(img)
    }

  return (
    <section className=" text-white">
      <div className="container mx-auto relative">
        {/* Left Content */}
        <div className="">
          <div className="bg-[#0b0f2a] py-10 px-5 pt-20">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              HSC 26 শেষ মুহূর্তের প্রস্তুতি কোর্স
              <span className="text-indigo-400"> [বিজ্ঞান বিভাগ Bundle]</span>
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Revision & Restart – বিজ্ঞান বিভাগের শিক্ষার্থীদের জন্য সম্পূর্ণ
              সাজানো একটি শেষ মুহূর্তের প্রস্তুতি কোর্স।
            </p>
          </div>
          {/* Course Start Buttons */}
          <div className="bg-white py-10 px-5">
            <div className="flex flex-wrap gap-4 mb-10 ">
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg flex items-center gap-2">
                ▶ বিজ্ঞান বিভাগ
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg flex items-center gap-2">
                🔊 বাংলা, ইংরেজি, ICT
              </button>
            </div>

            {/* Instructors */}
            <h2 className="text-xl font-semibold mb-4 text-black">
              কোর্স ইনস্ট্রাক্টর
            </h2>
            <div className="flex text-black">
              <div className="grid grid-cols-2 gap-6 bg-white shadow-2xl p-10 rounded-xl">
                {instructors.map((ins, i) => (
                  <div
                    key={i}
                    className=" shadow-2xl p-4 flex gap-2 items-center rounded-lg text-center"
                  >
                    <img
                      src={ins.img}
                      alt={ins.name}
                      className="w-20 h-20 mx-auto rounded-full object-cover mb-3"
                    />
                    <div>
                      <p className="font-medium text-sm text-left">{ins.name}</p>
                      <p className="text-xs text-gray-400 text-left">{ins.institute}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* Right Pricing Card */}
        <div className="bg-white text-gray-900 rounded-xl p-6 h-fit absolute border border-gray-500 shadow-2xl top-20 right-10">
            <img className="w-full mx-auto h-64 rounded-xl" src={images} alt="" />
            <div className="flex gap-2 justify-between my-5">
                {
                    thumbs.map(image => <img onClick={() => handleImages(image)} src={image} className="w-24 cursor-pointer rounded-xl"></img>)
                }
            </div>
          <div className="mb-4">
            <span className="text-2xl font-bold text-green-600">৳2550</span>
            <span className="line-through text-gray-400 ml-2">৳3900</span>
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold mb-6">
            কোর্স কিনুন
          </button>

          <ul className="space-y-3 text-sm">
            <li>
              ✔ ৭ টি বিষয় (Physics, Chemistry, Math, Biology, Bangla, English,
              ICT)
            </li>
            <li>✔ ১৩০+ লাইভ ক্লাস</li>
            <li>✔ ১৮০+ লেকচার স্লাইড</li>
            <li>✔ ১৮০+ MCQ ও মডেল টেস্ট</li>
            <li>✔ ফাইনাল প্রস্তুতি ও রিভিশন</li>
            <li>✔ ফ্রি প্রস্তুতি ম্যাটেরিয়াল</li>
          </ul>

          <p className="text-xs text-center text-gray-500 mt-6">
            📞 কোর্স সম্পর্কিত জানতে কল করুন:{" "}
            <span className="font-medium">16910</span>
          </p>
        </div>
      </div>
    </section>
  );
}
