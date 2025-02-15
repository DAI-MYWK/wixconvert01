import { Award, Star } from 'lucide-react'

export default function ProblemSolution() {
  return (
    <section className="bg-[#4CAF50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 左側のテキストエリア */}
          <div className="space-y-6">
            <div className="inline-block bg-white text-[#4CAF50] px-4 py-2 rounded-md font-bold">
              最短2週間、スマホでも管理できる
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              あらゆるWeb制作を
              <br />
              月10万円〜でカンタンに解決
            </h2>
            <p className="text-lg opacity-90">
              デザイン制作、コーディング、CMS構築、保守運用まで
              <br />
              すべてのWeb制作ニーズにワンストップで対応
            </p>
          </div>

          {/* 右側のイラストと問題点 */}
          <div className="relative">
            <div className="relative mx-auto max-w-[300px]">
              <img src="/placeholder.svg?height=300&width=300" alt="困っているビジネスマン" className="mx-auto" />

              {/* 問題点を示す円形バブル */}
              <div className="absolute top-0 right-0 bg-white text-[#4CAF50] rounded-full p-3 text-sm font-bold">
                デザイン修正
              </div>
              <div className="absolute top-1/4 right-[-20px] bg-white text-[#4CAF50] rounded-full p-3 text-sm font-bold">
                更新作業
              </div>
              <div className="absolute top-1/2 right-0 bg-white text-[#4CAF50] rounded-full p-3 text-sm font-bold">
                納期遅延
              </div>
              <div className="absolute bottom-1/4 right-[-30px] bg-white text-[#4CAF50] rounded-full p-3 text-sm font-bold">
                コスト増加
              </div>
              <div className="absolute bottom-0 right-0 bg-white text-[#4CAF50] rounded-full p-3 text-sm font-bold">
                運用負担
              </div>
            </div>
          </div>
        </div>

        {/* フリートライアル */}
        <div className="text-center mt-16">
          <p className="text-lg font-bold mb-6">＼ 1ヶ月無料お試し実施中 ／</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-[#FFB74D] text-white rounded-lg font-bold hover:bg-[#FFA726] transition-colors">
              今すぐ無料で相談してみる
            </button>
            <button className="px-8 py-4 bg-white text-[#4CAF50] rounded-lg font-bold hover:bg-gray-50 transition-colors">
              資料をダウンロードする（無料）
            </button>
          </div>
        </div>

        {/* 実績バッジ */}
        <div className="mt-16 bg-white/10 rounded-full py-6 px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex items-center gap-2">
              <Award className="h-12 w-12 text-[#FFD700]" />
              <div className="text-center">
                <div className="text-sm">Webデザイン</div>
                <div className="font-bold text-xl">No.1</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-12 w-12 text-[#FFD700]" />
              <div className="text-center">
                <div className="text-sm">顧客満足度</div>
                <div className="font-bold text-xl">No.1</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm">累計制作実績</div>
              <div className="font-bold text-2xl">
                1,000<span className="text-base">件</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm">顧客満足度</div>
              <div className="flex items-center justify-center">
                <span className="font-bold text-2xl">4.9</span>
                <Star className="h-4 w-4 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

