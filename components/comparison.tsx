import { Check, Minus, X } from 'lucide-react'

export default function Comparison() {
  const comparisonData = [
    {
      item: "基本料金",
      propagate: "98,000円/月〜",
      others: "300,000円/月〜",
      status: "circle",
    },
    {
      item: "保守運用費",
      propagate: "29,800円/月",
      others: "100,000円/月",
      status: "circle",
    },
    {
      item: "デザインの品質",
      propagate: "専属デザイナーによる高品質なデザイン制作",
      others: "テンプレート使用または外注による品質のばらつき",
      status: "circle",
    },
    {
      item: "更新の容易さ",
      propagate: "直感的な管理画面で簡単更新",
      others: "専門知識が必要で更新に時間がかかる",
      status: "circle",
    },
    {
      item: "レスポンシブ対応",
      propagate: "全デバイス完全対応",
      others: "オプション対応（追加料金）",
      status: "circle",
    },
    {
      item: "SEO対策",
      propagate: "基本機能として標準搭載",
      others: "オプション対応（追加料金）",
      status: "circle",
    },
    {
      item: "サポート体制",
      propagate: "24時間365日対応可能",
      others: "平日営業時間のみ",
      status: "circle",
    },
    {
      item: "制作期間",
      propagate: "最短2週間から納品可能",
      others: "通常2-3ヶ月必要",
      status: "circle",
    },
  ]

  const StatusIcon = ({ status }: { status: string }) => {
    switch (status) {
      case "circle":
        return <Check className="w-6 h-6 text-[#4CAF50]" />
      case "triangle":
        return <Minus className="w-6 h-6 text-yellow-500" />
      case "cross":
        return <X className="w-6 h-6 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          一般的なWeb制作会社と
          <br />
          プロパゲートの違い
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-[1fr_1.5fr_1.5fr] rounded-lg overflow-hidden border-2 border-[#4CAF50]">
            {/* ヘッダー */}
            <div className="bg-gray-100 p-4 font-bold border-b-2 border-[#4CAF50]"></div>
            <div className="bg-[#4CAF50] p-4 text-white font-bold text-center border-b-2 border-[#4CAF50]">
              プロパゲート
            </div>
            <div className="bg-gray-700 p-4 text-white font-bold text-center border-b-2 border-[#4CAF50]">
              一般的なWeb制作会社
            </div>

            {/* 比較項目 */}
            {comparisonData.map((row, index) => (
              <>
                <div className="p-4 font-medium border-b-2 border-[#4CAF50] bg-gray-50" key={`item-${index}`}>
                  {row.item}
                </div>
                <div className="p-4 border-b-2 border-[#4CAF50] bg-[#E8F5E9]" key={`propagate-${index}`}>
                  <div className="flex items-center gap-2">
                    <StatusIcon status={row.status} />
                    <span>{row.propagate}</span>
                  </div>
                </div>
                <div className="p-4 border-b-2 border-[#4CAF50] bg-white" key={`others-${index}`}>
                  <div className="flex items-center gap-2">
                    <X className="w-6 h-6 text-gray-400" />
                    <span>{row.others}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

