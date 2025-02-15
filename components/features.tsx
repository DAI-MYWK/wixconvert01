export default function Features() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-[#E8F5E9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">プロパゲートの魅力的な特徴</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* 左側：制作時間の効率化 */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="relative mb-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-block transform -rotate-3 text-lg font-bold px-8">
                  ＼ 圧倒的な制作時間短縮 ／
                </span>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-lg mb-3">従来の制作プロセス</h3>
                  <div className="bg-gray-100 h-14 flex items-center justify-between px-4">
                    <span>デザインカンプの作成・コーディング・修正対応</span>
                    <span className="font-bold">100時間</span>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-lg mb-3">プロパゲートの制作プロセス</h3>
                  <div className="relative">
                    <div className="bg-[#4CAF50] h-14 w-[50%] flex items-center px-4 text-white">
                      <span>コンポーネント開発</span>
                    </div>
                    <div className="absolute -top-2 left-[45%] bg-[#FFB74D] text-white px-4 py-1 rounded-full text-sm whitespace-nowrap">
                      制作時間 50% 以上短縮
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：コスト比較 */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="relative mb-12">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-block transform -rotate-3 text-lg font-bold px-8">＼ 業界最安値水準 ／</span>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-lg mb-3">一般的な制作費用</h3>
                  <div className="bg-gray-100 h-14 flex items-center justify-between px-4">
                    <span>デザイン50万円＋コーディング70万円＋その他30万円</span>
                    <span className="font-bold">150万円〜</span>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-lg mb-3">プロパゲートの制作費用</h3>
                  <div className="relative">
                    <div className="bg-[#4CAF50] h-14 w-[66%] flex items-center justify-between px-4 text-white">
                      <span>デザイン＆コーディング80万円＋その他20万円</span>
                      <span className="font-bold">100万円〜</span>
                    </div>
                    <div className="absolute -right-24 top-1/2 -translate-y-1/2 bg-[#FFB74D] text-white p-2 rounded-lg text-center">
                      <div className="text-xs">約</div>
                      <div className="text-xl font-bold">50万円</div>
                      <div className="text-xs">削減</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTAボタン */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-16">
          <button className="px-8 py-4 bg-[#FFB74D] text-white rounded-lg font-bold hover:bg-[#FFA726] transition-colors">
            今すぐ無料で相談してみる
          </button>
          <button className="px-8 py-4 bg-white border-2 border-[#FFB74D] text-[#FFB74D] rounded-lg font-bold hover:bg-gray-50 transition-colors">
            資料をダウンロードする（無料）
          </button>
        </div>
      </div>
    </section>
  )
}

