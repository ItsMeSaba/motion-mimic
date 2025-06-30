import Link from "next/link";
import Lightning from "@/assets/svg/lightning.svg";
import Heart from "@/assets/svg/heart.svg";
import ClosingBracket from "@/assets/svg/closing-bracket.svg";
import clsx from "clsx";

const points = [
  {
    icon: Lightning,
    title: "Lightning Fast",
    description: "Optimized animations that run smoothly on all devices",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Beautiful Design",
    description: "Carefully crafted animations that enhance user experience",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: ClosingBracket,
    title: "Easy to Use",
    description: "Take code and control the animation fully",
    gradient: "from-blue-500 to-cyan-500",
  },
];

export default function Hero() {
  const gradientBaseStyles =
    "absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob";

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`${gradientBaseStyles} -top-40 -right-40 bg-purple-500`}
        />
        <div
          className={`${gradientBaseStyles} -bottom-40 -left-40 bg-blue-500 animation-delay-2000`}
        />
        <div
          className={`${gradientBaseStyles} top-40 left-40 bg-pink-500 animation-delay-4000`}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Motion Mimic
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover a collection of beautiful, performant animations that bring
            your web applications to life
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/animations"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10">Explore Animations</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          {/* <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full text-lg transition-all duration-300 hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10">
            View Documentation
          </button> */}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {points.map((point, index) => (
            <div className="group" key={point.title}>
              <div
                className={clsx(
                  "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                  "bg-gradient-to-br group-hover:scale-110 transition-transform duration-300",
                  point.gradient
                )}
              >
                <point.icon />
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {point.title}
              </h3>

              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
