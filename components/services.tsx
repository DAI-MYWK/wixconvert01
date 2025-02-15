export default function Services() {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">プロパゲートが選ばれる理由</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 左カラム：課題 */}
          <div>
            <div className="bg-[#4A4A4A] text-white p-4 rounded-t-lg">
              <h3 className="text-xl text-center">こんな課題ありませんか？</h3>
            </div>
            <div className="bg-white rounded-b-lg shadow-lg p-8 space-y-8">
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">古いWebサイトで、スマートフォンでの表示が崩れてしまう</p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">サイトの更新が難しく、最新情報を掲載できていない</p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">Web集客ができておらず、問い合わせが少ない</p>
              </div>
            </div>
          </div>

          {/* 右カラム：解決策 */}
          <div className="relative">
            <div className="bg-[#4CAF50] text-white p-4 rounded-t-lg">
              <h3 className="text-xl text-center">プロパゲートなら全て解決</h3>
            </div>
            <div className="bg-[#E8F5E9] rounded-b-lg shadow-lg p-8 space-y-8">
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">レスポンシブデザインで、全ての端末で美しく表示されるサイトを制作</p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">直感的な管理画面で、誰でも簡単にサイトを更新可能</p>
              </div>
              <div className="flex items-start gap-4">
                <img src="/placeholder.svg?height=80&width=80" alt="" className="w-20 h-20" />
                <p className="text-lg">SEO対策とコンテンツマーケティングで、確実な集客を実現</p>
              </div>
            </div>

            {/* 矢印 - モバイルでは非表示 */}
            <div className="hidden md:block absolute -left-8 top-1/2 -translate-y-1/2">
              <div className="relative w-16 h-16 flex items-center">
                <div className="absolute w-12 h-3 bg-[#4CAF50]"></div>
                <div
                  className="absolute right-0 w-0 h-0 
                  border-t-[16px] border-l-[24px] border-b-[16px]
                  border-t-transparent border-l-[#4CAF50] border-b-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

