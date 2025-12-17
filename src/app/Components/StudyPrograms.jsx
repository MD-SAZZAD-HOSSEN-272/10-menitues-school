// components/StudyPrograms.jsx

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
  return (
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
            className="bg-zinc-900 border border-zinc-700 rounded-2xl p-4 hover:scale-105 transition-transform duration-300"
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
  );
}

