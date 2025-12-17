// components/EnglishCoursesSection.jsx

const locations = [
  {
    name: "উত্তরা",
    address: "রোড: ৮, সেক্টর: ৯, উত্তরা, ঢাকা",
  },
  {
    name: "পান্থপথ",
    address: "রোড: ৪/১, পান্থপথ, ঢাকা",
  },
  {
    name: "মিরপুর",
    address: "রোড: ১০, মিরপুর-১০, ঢাকা",
  },
  {
    name: "ধানমন্ডি",
    address: "রোড: ১৫, ধানমন্ডি, ঢাকা",
  },
  {
    name: "চট্টগ্রাম",
    address: "ও. আর নিজাম রোড, চট্টগ্রাম",
  },
];

const courses = [
  {
    title: "Kids' English",
    subtitle: "For KG – Class 5",
    image: "/assets/img1.jfif",
    highlight: false,
  },
  {
    title: "Spoken English",
    subtitle: "For Class 6–10",
    image: "/assets/img2.jpg",
    highlight: false,
  },
  {
    title: "IELTS Programme",
    subtitle: "For HSC & Above",
    image: "/assets/img3.jpg",
    highlight: false,
  },
  {
    title: "Study Abroad",
    subtitle: "For HSC & Above",
    image: "/assets/img4.jfif",
    highlight: false,
  },
  {
    title: "Spoken English",
    subtitle: "Crash Course",
    image: "/assets/img5.jfif",
    highlight: false,
  },
  {
    title: "Spoken English",
    subtitle: "Free Course",
    image: "/assets/img6.jpg",
    highlight: false,
  },
];

export default function EnglishCoursesSection() {
  return (
    <section className="relative py-20 px-4 bg-black overflow-hidden">
      {/* Glow Container */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800 shadow-[0_0_120px_rgba(255,80,80,0.15)] p-10">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-orange-300 mb-10">
          ক্লাসরুমে ইংরেজি শেখার নতুন আনন্দ
        </h2>

        {/* Locations */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-gray-200 max-w-[220px]"
            >
              <p className="font-semibold text-white">{loc.name}</p>
              <p className="text-xs text-gray-400 mt-1">{loc.address}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {courses.map((course, i) => (
            
            <div
              key={i}
              className={`rounded-2xl p-3 bg-zinc-900 border ${
                course.highlight
                  ? "border-orange-500 shadow-[0_0_30px_rgba(255,140,0,0.4)]"
                  : "border-zinc-700"
              } hover:scale-105 transition`}
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-36 object-cover"
                />
              </div>

              <div className="mt-3 text-center">
                <p className="text-white font-semibold text-sm">
                  {course.title}
                </p>
                <p className="text-xs text-gray-400">{course.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-medium transition">
            অনলাইন সেন্টারে ফ্রি ক্লাস করুন →
          </button>
        </div>
      </div>
    </section>
  );
}
