"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const works = [
  {
    id: 1,
    title: "SALON DE KOH",
    category: "美容サロン",
    description: "完全予約制のプライベートサロン向けウェブサイト。スマートフォンからの予約に特化した設計。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/497baf_75aa56dd9f0245f0a8937f325a3217d2~mv2.jpg-cAdbHQvigGmONDFdclkSmmkzWFFdiR.jpeg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "BCP対策ポータル",
    category: "企業向けポータル",
    description: "企業のBCP対策をサポートするポータルサイト。情報管理と従業員教育を一元化。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfc419e2033449ac84a40d4537d00afc.jpg-LcHz5FSreGwtNcvwALYQDZRZbfCUMT.jpeg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "MuuMuu Aloha",
    category: "飲食店",
    description: "ハワイアンレストランのブランディングサイト。オンライン予約とデリバリーに対応。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/497baf_75aa56dd9f0245f0a8937f325a3217d2~mv2.jpg-cAdbHQvigGmONDFdclkSmmkzWFFdiR.jpeg",
    tags: ["Vue.js", "Firebase", "Sass"],
  },
  {
    id: 4,
    title: "Refrear",
    category: "ヘルスケア",
    description: "オンラインヨガ予約プラットフォーム。ライブ配信とオンデマンド動画の提供。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dfc419e2033449ac84a40d4537d00afc.jpg-LcHz5FSreGwtNcvwALYQDZRZbfCUMT.jpeg",
    tags: ["Next.js", "Prisma", "TailwindCSS"],
  },
]

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % works.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev - 1 + works.length) % works.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [isAnimating])

  return (
    <section id="works" className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">制作実績</h2>

        <div className="relative max-w-6xl mx-auto">
          {/* スライダーコントロール */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            disabled={isAnimating}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
            disabled={isAnimating}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* スライダー */}
          <div className="relative h-[600px] overflow-hidden rounded-xl border-2 border-[#4CAF50]">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {works.map((work) => (
                <div
                  key={work.id}
                  className="w-full flex-shrink-0 relative bg-gradient-to-br from-[#43A047] to-[#1B5E20]"
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10" />
                  </div>
                  <div className="relative h-full flex flex-col md:flex-row items-center justify-center gap-8 p-8">
                    {/* 画像 */}
                    <div className="w-full md:w-1/2 aspect-video relative">
                      <img
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        className="rounded-lg shadow-xl object-cover w-full h-full"
                      />
                    </div>
                    {/* テキスト */}
                    <div className="w-full md:w-1/2 text-white space-y-4">
                      <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm">
                        {work.category}
                      </div>
                      <h3 className="text-3xl font-bold">{work.title}</h3>
                      <p className="text-white/90">{work.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {work.tags.map((tag) => (
                          <span key={tag} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ページネーション */}
          <div className="flex justify-center gap-2 mt-4">
            {works.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentSlide(index)
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-[#4CAF50] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

