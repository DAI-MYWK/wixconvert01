export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] pt-16 overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#43A047] to-[#1B5E20]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/10" />
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          {/* 左側のテキストエリア */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold border border-white/20 shadow-lg animate-slide-in">
                最短2週間、スマホでも管理できる
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                <span className="block mb-2 animate-slide-up">ビジネスの成長を</span>
                <span className="block mb-2 animate-slide-up animation-delay-100">加速させる</span>
                <span className="block text-[#FFD700] animate-slide-up animation-delay-200">Webサイト制作</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed animate-fade-in animation-delay-300">
                デザインからコーディング、運用まで
                <br className="hidden md:block" />
                すべてをワンストップでサポート
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <button className="group relative px-8 py-4 bg-white text-[#43A047] rounded-full font-bold hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">無料相談を予約する</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-[#FFD700] to-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-bold border-2 border-white/20 hover:bg-white/10 transition-all duration-300">
                料金プランを見る
              </button>
            </div>
          </div>

          {/* 右側の画像エリア */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AdobeStock_290492187-o5tWniKQv4LdJgo5sJzXUPJ4k4Qt6r.jpeg"
                alt="Web制作の打ち合わせ"
                className="rounded-lg shadow-2xl"
              />

              {/* 問題解決のポイント - 円形デザイン */}
              <div className="absolute -top-8 -left-8 animate-float animation-delay-300">
                <div className="bg-white/90 w-24 h-24 rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-[#43A047] font-bold text-center">
                    スピード
                    <br />
                    対応
                  </span>
                </div>
              </div>
              <div className="absolute top-1/4 -right-8 animate-float animation-delay-400">
                <div className="bg-white/90 w-24 h-24 rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-[#43A047] font-bold text-center">
                    簡単
                    <br />
                    更新
                  </span>
                </div>
              </div>
              <div className="absolute bottom-1/4 -left-8 animate-float animation-delay-500">
                <div className="bg-white/90 w-24 h-24 rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-[#43A047] font-bold text-center">
                    コスト
                    <br />
                    削減
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 animate-float animation-delay-600">
                <div className="bg-white/90 w-24 h-24 rounded-full shadow-xl flex items-center justify-center">
                  <span className="text-[#43A047] font-bold text-center">
                    運用
                    <br />
                    サポート
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

